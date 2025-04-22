//HEADER

const changeHeaderColor = () => {
    const header = document.querySelector('.menu');
    if (window.innerWidth > 768) {
        if (window.scrollY > 1) {
            header.style.backgroundColor = '#101010';
            header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = 'none';
            header.style.transition = 'background-color 0.2s ease-in-out';
        }
    }
};

const toggleMenu = () => {
    const hamburger = document.querySelector('.menu__hamburger');
    const nav = document.querySelector('.menu__nav');
    const body = document.body;
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('no-scroll');
};

const closeMenuOnLinkClick = () => {
    const hamburger = document.querySelector('.menu__hamburger');
    const nav = document.querySelector('.menu__nav');
    const body = document.body;
    const navLinks = document.querySelectorAll('.menu__nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
};

document.querySelector('.menu__hamburger').addEventListener('click', toggleMenu);
window.addEventListener('scroll', changeHeaderColor);
window.addEventListener('resize', changeHeaderColor);
document.addEventListener('DOMContentLoaded', closeMenuOnLinkClick);

//ER Diagram

mermaid.initialize({
    startOnLoad: true
});

const erDiagram = `
erDiagram
    EMPLOYEES {
        int id
        varchar name
        varchar position
        varchar phone
        varchar email
    }
    CLIENTS {
        int id
        varchar name
        varchar phone
        varchar email
        text address
    }
    WAREHOUSE {
        int id
        varchar location
        text description
    }
    PRODUCTS {
        int id
        varchar name
        text description
        varchar category
        decimal price
        int quantity
        int warehouse_id
        tinyint is_online
    }
    INVOICES {
        int id
        int client_id
        int employee_id
        datetime date
        decimal total_amount
        tinyint delivery_required
    }
    INVOICE_ITEMS {
        int id
        int invoice_id
        int product_id
        int quantity
        decimal unit_price
    }
    DELIVERY {
        int id
        int invoice_id
        varchar status
        date delivery_date
        text delivery_address
        varchar courier_name
    }

    EMPLOYEES ||--o{ INVOICES : ""
    CLIENTS ||--o{ INVOICES : ""
    WAREHOUSE ||--o{ PRODUCTS : ""
    INVOICES ||--o{ INVOICE_ITEMS : ""
    PRODUCTS ||--o{ INVOICE_ITEMS : ""
    INVOICES ||--o{ DELIVERY : ""
`;

document.getElementById('er-container').innerHTML = `<div class="mermaid">${erDiagram}</div>`;

//TABLES

document.addEventListener("DOMContentLoaded", function() {
    // Данные
    const employees = [
        { id: 1, name: 'Азамат Токтогулов', position: 'Менеджер', phone: '+996700111001', email: 'azamat@example.com' },
        { id: 2, name: 'Жанара Абдиева', position: 'Оператор', phone: '+996700111002', email: 'zhanara@example.com' },
        { id: 3, name: 'Нурсултан Маматов', position: 'Кладовщик', phone: '+996700111003', email: 'nursultan@example.com' },
        { id: 4, name: 'Айгерим Асанова', position: 'Бухгалтер', phone: '+996700111004', email: 'aigerim@example.com' },
        { id: 5, name: 'Руслан Джолдошев', position: 'Техподдержка', phone: '+996700111005', email: 'ruslan@example.com' },
        { id: 6, name: 'Саламат Калыков', position: 'Продавец', phone: '+996700111006', email: 'salamat@example.com' },
        { id: 7, name: 'Гульнара Шамшиева', position: 'Оператор', phone: '+996700111007', email: 'gulnara@example.com' },
        { id: 8, name: 'Эрлан Ибраимов', position: 'Менеджер', phone: '+996700111008', email: 'erlan@example.com' },
        { id: 9, name: 'Назгуль Тургунбаева', position: 'HR', phone: '+996700111009', email: 'nazgul@example.com' },
        { id: 10, name: 'Тимур Султанов', position: 'Курьер', phone: '+996700111010', email: 'timur@example.com' },
        { id: 11, name: 'Алина Абасова', position: 'Бухгалтер', phone: '+996700111011', email: 'alina@example.com' },
        { id: 12, name: 'Айбек Тургунов', position: 'Продавец', phone: '+996700111012', email: 'aybek@example.com' },
        { id: 13, name: 'Жибек Курманова', position: 'Оператор', phone: '+996700111013', email: 'zhibek@example.com' },
        { id: 14, name: 'Канат Усенов', position: 'Кладовщик', phone: '+996700111014', email: 'kanat@example.com' },
        { id: 15, name: 'Дария Иманова', position: 'HR', phone: '+996700111015', email: 'daria@example.com' }
    ];

    const clients = [
        { id: 1, name: 'Эрмек Асанов', phone: '+996701111001', email: 'ermek@example.com', address: 'Бишкек, ул. Ленина 12' },
        { id: 2, name: 'Айпери Садыкова', phone: '+996701111002', email: 'aiperi@example.com', address: 'Ош, ул. Курманжан 9' },
        { id: 3, name: 'Бакыт Касымов', phone: '+996701111003', email: 'bakyt@example.com', address: 'Токмок, ул. Токтогула 5' },
        { id: 4, name: 'Асель Джумабаева', phone: '+996701111004', email: 'asel@example.com', address: 'Бишкек, ул. Чуй 44' },
        { id: 5, name: 'Нурбек Султанов', phone: '+996701111005', email: 'nurbek@example.com', address: 'Каракол, ул. Абдрахманова 3' },
        { id: 6, name: 'Айгуль Кулматова', phone: '+996701111006', email: 'aigul@example.com', address: 'Бишкек, ул. Исанова 10' },
        { id: 7, name: 'Руслан Жумабаев', phone: '+996701111007', email: 'ruslanj@example.com', address: 'Нарын, ул. Манаса 2' },
        { id: 8, name: 'Мээрим Тилекова', phone: '+996701111008', email: 'meerim@example.com', address: 'Ош, ул. Масалиева 6' },
        { id: 9, name: 'Улан Мырзаев', phone: '+996701111009', email: 'ulan@example.com', address: 'Бишкек, ул. Советская 15' },
        { id: 10, name: 'Динара Алтыбаева', phone: '+996701111010', email: 'dinara@example.com', address: 'Балыкчы, ул. Ленина 8' },
        { id: 11, name: 'Каныкей Ниязова', phone: '+996701111011', email: 'kanykei@example.com', address: 'Бишкек, ул. Байтик Баатыра 11' },
        { id: 12, name: 'Алмаз Исмаилов', phone: '+996701111012', email: 'almaz@example.com', address: 'Талас, ул. Горького 13' },
        { id: 13, name: 'Гульнур Кубатова', phone: '+996701111013', email: 'gulnur@example.com', address: 'Ош, ул. Мадыбаева 7' },
        { id: 14, name: 'Жоомарт Абдрахманов', phone: '+996701111014', email: 'zhoomart@example.com', address: 'Бишкек, ул. Панфилова 19' },
        { id: 15, name: 'Сезим Айдарова', phone: '+996701111015', email: 'sezim@example.com', address: 'Кара-Балта, ул. Чолпон-Атая 4' }
    ];

    const warehouse = [
        { id: 1, location: 'Бишкек, Южный склад', description: 'Центральный склад для хранения техники' },
        { id: 2, location: 'Бишкек, Северный склад', description: 'Резервный склад с климат-контролем' },
        { id: 3, location: 'Ош, Главный склад', description: 'Склад для южного региона' },
        { id: 4, location: 'Токмок, мини-склад', description: 'Малый склад под заказы' },
        { id: 5, location: 'Каракол, временный', description: 'Для сезонной техники' },
        { id: 6, location: 'Нарын, горный склад', description: 'Ограниченный доступ, зима' },
        { id: 7, location: 'Талас, основной', description: 'Обслуживает Таласскую область' },
        { id: 8, location: 'Балыкчы, склад у трассы', description: 'Удобен для доставки' },
        { id: 9, location: 'Кара-Балта, индустриальный', description: 'Быстрый отгрузочный' },
        { id: 10, location: 'Бишкек, склад-3', description: 'Используется под крупную бытовую технику' },
        { id: 11, location: 'Ош, резерв', description: 'Для избыточных остатков' },
        { id: 12, location: 'Токмок, резервный', description: 'Иногда используется при пиковой нагрузке' },
        { id: 13, location: 'Бишкек, временный склад', description: 'Мобильный склад на лето' },
        { id: 14, location: 'Бишкек, отдел логистики', description: 'Тут хранятся товары с доставкой' },
        { id: 15, location: 'Бишкек, склад 14', description: 'Дополнительный склад для онлайн-продаж' }
    ];

    const products = [
        { id: 1, name: 'Ноутбук ASUS X515', description: '15.6" ноутбук, i5, 8GB RAM', category: 'Ноутбуки', price: 45990.00, quantity: 10, warehouse_id: 1, is_online: true },
        { id: 2, name: 'Смартфон Samsung A52', description: '6.5", 128GB, 4G', category: 'Смартфоны', price: 31990.00, quantity: 25, warehouse_id: 2, is_online: true },
        { id: 3, name: 'Холодильник Beko', description: '2-камерный, 300 л.', category: 'Бытовая техника', price: 27990.00, quantity: 5, warehouse_id: 3, is_online: false },
        { id: 4, name: 'Микроволновка LG', description: '800Вт, белая', category: 'Кухонная техника', price: 6990.00, quantity: 12, warehouse_id: 4, is_online: true },
        { id: 5, name: 'Пылесос Xiaomi', description: 'Беспроводной, 150AW', category: 'Уборка', price: 11990.00, quantity: 8, warehouse_id: 1, is_online: true },
        { id: 6, name: 'Телевизор Samsung 43"', description: 'Smart TV, 4K', category: 'Телевизоры', price: 22990.00, quantity: 7, warehouse_id: 1, is_online: true },
        { id: 7, name: 'Утюг Philips', description: '2000Вт, паровой', category: 'Кухонная техника', price: 3990.00, quantity: 14, warehouse_id: 5, is_online: false },
        { id: 8, name: 'Ноутбук HP Pavilion', description: '14", Ryzen 5', category: 'Ноутбуки', price: 49990.00, quantity: 6, warehouse_id: 6, is_online: true },
        { id: 9, name: 'Кофеварка DeLonghi', description: 'Эспрессо, автомат', category: 'Кухонная техника', price: 14990.00, quantity: 4, warehouse_id: 7, is_online: false },
        { id: 10, name: 'Морозильник Indesit', description: '150 л.', category: 'Бытовая техника', price: 21990.00, quantity: 3, warehouse_id: 8, is_online: false },
        { id: 11, name: 'Смартфон iPhone 13', description: '128GB, синий', category: 'Смартфоны', price: 89990.00, quantity: 9, warehouse_id: 1, is_online: true },
        { id: 12, name: 'Планшет Lenovo Tab M10', description: '10.1", 64GB', category: 'Планшеты', price: 18990.00, quantity: 10, warehouse_id: 2, is_online: true },
        { id: 13, name: 'Стиральная машина LG', description: '6 кг, автомат', category: 'Бытовая техника', price: 24990.00, quantity: 5, warehouse_id: 3, is_online: false },
        { id: 14, name: 'Монитор Acer 24"', description: 'Full HD, IPS', category: 'Мониторы', price: 9990.00, quantity: 11, warehouse_id: 4, is_online: true },
        { id: 15, name: 'Колонка JBL Flip 6', description: 'Bluetooth, водозащита', category: 'Аудио', price: 7990.00, quantity: 13, warehouse_id: 1, is_online: true }
    ];

    const invoices = [
        { id: 1, client_id: 1, employee_id: 1, date: '2024-04-01 10:00:00', total_amount: 89990.00, delivery_required: true },
        { id: 2, client_id: 2, employee_id: 2, date: '2024-04-02 12:30:00', total_amount: 31990.00, delivery_required: false },
        { id: 3, client_id: 3, employee_id: 3, date: '2024-04-03 15:00:00', total_amount: 6990.00, delivery_required: true },
        { id: 4, client_id: 4, employee_id: 4, date: '2024-04-04 09:45:00', total_amount: 24990.00, delivery_required: false },
        { id: 5, client_id: 5, employee_id: 5, date: '2024-04-05 11:10:00', total_amount: 11990.00, delivery_required: true },
        { id: 6, client_id: 6, employee_id: 6, date: '2024-04-06 13:20:00', total_amount: 45990.00, delivery_required: false },
        { id: 7, client_id: 7, employee_id: 7, date: '2024-04-07 14:40:00', total_amount: 7990.00, delivery_required: true },
        { id: 8, client_id: 8, employee_id: 8, date: '2024-04-08 16:00:00', total_amount: 9990.00, delivery_required: false },
        { id: 9, client_id: 9, employee_id: 9, date: '2024-04-09 17:25:00', total_amount: 22990.00, delivery_required: true },
        { id: 10, client_id: 10, employee_id: 10, date: '2024-04-10 08:30:00', total_amount: 27990.00, delivery_required: true },
        { id: 11, client_id: 11, employee_id: 11, date: '2024-04-11 11:50:00', total_amount: 14990.00, delivery_required: false },
        { id: 12, client_id: 12, employee_id: 12, date: '2024-04-12 13:15:00', total_amount: 18990.00, delivery_required: true },
        { id: 13, client_id: 13, employee_id: 13, date: '2024-04-13 15:00:00', total_amount: 3990.00, delivery_required: false },
        { id: 14, client_id: 14, employee_id: 14, date: '2024-04-14 16:45:00', total_amount: 21990.00, delivery_required: true },
        { id: 15, client_id: 15, employee_id: 15, date: '2024-04-15 10:30:00', total_amount: 49990.00, delivery_required: false }
    ];

    const invoice_items = [
        { id: 1, invoice_id: 1, product_id: 11, quantity: 1, unit_price: 89990.00 },
        { id: 2, invoice_id: 2, product_id: 2, quantity: 1, unit_price: 31990.00 },
        { id: 3, invoice_id: 3, product_id: 4, quantity: 1, unit_price: 6990.00 },
        { id: 4, invoice_id: 4, product_id: 13, quantity: 1, unit_price: 24990.00 },
        { id: 5, invoice_id: 5, product_id: 5, quantity: 1, unit_price: 11990.00 },
        { id: 6, invoice_id: 6, product_id: 1, quantity: 1, unit_price: 45990.00 },
        { id: 7, invoice_id: 7, product_id: 15, quantity: 1, unit_price: 7990.00 },
        { id: 8, invoice_id: 8, product_id: 14, quantity: 1, unit_price: 9990.00 },
        { id: 9, invoice_id: 9, product_id: 6, quantity: 1, unit_price: 22990.00 },
        { id: 10, invoice_id: 10, product_id: 3, quantity: 1, unit_price: 27990.00 },
        { id: 11, invoice_id: 11, product_id: 9, quantity: 1, unit_price: 14990.00 },
        { id: 12, invoice_id: 12, product_id: 12, quantity: 1, unit_price: 18990.00 },
        { id: 13, invoice_id: 13, product_id: 7, quantity: 1, unit_price: 3990.00 },
        { id: 14, invoice_id: 14, product_id: 10, quantity: 1, unit_price: 21990.00 },
        { id: 15, invoice_id: 15, product_id: 8, quantity: 1, unit_price: 49990.00 }
    ];

    const delivery = [
        { id: 1, invoice_id: 1, status: 'в пути', delivery_date: '2024-04-02', delivery_address: 'Бишкек, ул. Ленина 12', courier_name: 'Тимур Султанов' },
        { id: 2, invoice_id: 3, status: 'доставлено', delivery_date: '2024-04-04', delivery_address: 'Ош, ул. Курманжан 9', courier_name: 'Айбек Тургунов' },
        { id: 3, invoice_id: 5, status: 'в пути', delivery_date: '2024-04-06', delivery_address: 'Токмок, ул. Токтогула 5', courier_name: 'Канат Усенов' },
        { id: 4, invoice_id: 7, status: 'ожидает отправки', delivery_date: '2024-04-08', delivery_address: 'Каракол, ул. Абдрахманова 3', courier_name: 'Тимур Султанов' },
        { id: 5, invoice_id: 9, status: 'доставлено', delivery_date: '2024-04-10', delivery_address: 'Нарын, ул. Манаса 2', courier_name: 'Айбек Тургунов' },
        { id: 6, invoice_id: 10, status: 'в пути', delivery_date: '2024-04-11', delivery_address: 'Талас, ул. Горького 13', courier_name: 'Канат Усенов' },
        { id: 7, invoice_id: 12, status: 'ожидает отправки', delivery_date: '2024-04-13', delivery_address: 'Балыкчы, ул. Ленина 8', courier_name: 'Тимур Султанов' },
        { id: 8, invoice_id: 14, status: 'в пути', delivery_date: '2024-04-15', delivery_address: 'Кара-Балта, ул. Чолпон-Атая 4', courier_name: 'Айбек Тургунов' }
    ];

    const tablesData = {
        employees,
        clients,
        warehouse,
        products,
        invoices,
        invoice_items,
        delivery
    };

    function populateTable(tableId, data) {
        const table = document.querySelector(`#${tableId} tbody`);
        data.forEach(row => {
            const tr = document.createElement('tr');
            Object.values(row).forEach(value => {
                const td = document.createElement('td');
                td.textContent = value;
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });
    }

    Object.keys(tablesData).forEach(tableId => {
        populateTable(tableId, tablesData[tableId]);
    });

    function populateQueryTable(tableId, data) {
        const table = document.querySelector(`#${tableId} tbody`);
        table.innerHTML = ''; // Очистить таблицу
        data.forEach(row => {
            const tr = document.createElement('tr');
            Object.values(row).forEach(value => {
                const td = document.createElement('td');
                td.textContent = value === null ? '' : value;
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });
    }

    function getClientsInvoices() {
        const result = clients.map(client => {
            const invoice = invoices.find(invoice => invoice.client_id === client.id) || {};
            return {
                client_name: client.name,
                invoice_id: invoice.id || null,
                date: invoice.date || null,
                total_amount: invoice.total_amount || null
            };
        });
        populateQueryTable('clients-invoices', result);
    }

    function getProductsWarehouse() {
        const result = products
            .map(product => {
                const warehouseItem = warehouse.find(w => w.id === product.warehouse_id);
                return {
                    name: product.name,
                    quantity: product.quantity,
                    location: warehouseItem ? warehouseItem.location : null
                };
            })
            .sort((a, b) => b.quantity - a.quantity);
        populateQueryTable('products-warehouse', result);
    }

    function getOnlineProducts() {
        const result = products
            .filter(product => product.is_online)
            .map(product => ({
                name: product.name,
                price: product.price,
                quantity: product.quantity
            }));
        populateQueryTable('online-products', result);
    }

    function getInvoicesDelivery() {
        const result = invoices
            .filter(invoice => invoice.delivery_required)
            .map(invoice => {
                const deliveryItem = delivery.find(d => d.invoice_id === invoice.id);
                return {
                    invoice_id: invoice.id,
                    status: deliveryItem ? deliveryItem.status : null,
                    delivery_date: deliveryItem ? deliveryItem.delivery_date : null,
                    courier_name: deliveryItem ? deliveryItem.courier_name : null
                };
            });
        populateQueryTable('invoices-delivery', result);
    }

    function getTopProducts() {
        const productSales = products.map(product => {
            const totalSold = invoice_items
                .filter(item => item.product_id === product.id)
                .reduce((sum, item) => sum + item.quantity, 0);
            return {
                name: product.name,
                total_sold: totalSold
            };
        });
        const result = productSales
            .filter(item => item.total_sold > 0)
            .sort((a, b) => b.total_sold - a.total_sold)
            .slice(0, 15);
        populateQueryTable('top-products', result);
    }

    function getEmployeeSales() {
        const result = employees.map(employee => {
            const employeeInvoices = invoices.filter(invoice => invoice.employee_id === employee.id);
            const salesCount = employeeInvoices.length;
            const totalSales = employeeInvoices.reduce((sum, invoice) => sum + invoice.total_amount, 0);
            return {
                name: employee.name,
                sales_count: salesCount,
                total_sales: totalSales
            };
        }).filter(item => item.sales_count > 0);
        populateQueryTable('employee-sales', result);
    }

    getClientsInvoices();
    getProductsWarehouse();
    getOnlineProducts();
    getInvoicesDelivery();
    getTopProducts();
    getEmployeeSales();
});

//Footer date

document.getElementById("year").textContent = new Date().getFullYear();

