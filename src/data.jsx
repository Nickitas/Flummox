import logo from '../public/logo.svg'
import { Calendar, 
         Layers,
         Bell,
         ArrowDown,
         ArrowLeft, 
         ArrowRight
} from './components/svg.module'
import phone from '../public/hero_phone.svg'
import pic1 from '../public/about_pic1.png'
import pic2 from '../public/about_pic2.png'
import qr from '../public/qr_img.png'
import ilim from '../public/ilim.png'
import olesya from '../public/olesya.png'
import dima from '../public/dima.png'
import julia from '../public/julia.png'
import nick from '../public/nick.png'


// HERO
export const hero = {
    logo: logo,
    brand: 'Flummox'
}

// NAVIGATION
export const navigation = {
    title: 'Навигация',
    list: [
        {
            title:'Проект',
            link:'#project'
        },
        {
            title:'Перспективы',
            link:'#perspective'
        },
        {
            title:'О Нас',
            link:'#about'
        }
    ],
    btn: 'Продукт'
}

// HEADER
export const header = {
    title: 'Классифицируйте Ваш сетевой трафик уже сейчас!',
    text: 'В наши дни, когда мы в значительной степени полагаемся на Интернет почти во всем, что мы делаем в нашей повседневной жизни, киберугрозы также растут. Поэтому важно понимать его функционирование, которое различается в зависимости от инфраструктуры.',
    btn: 'Попробовать',
    phone: phone,
    bnft1: ['Easy','to use'],
    bnft2: ['Приятный','UI'],
    bnft3: 'Пользователей'
}

// PROJECT
export const project = [
    {
        icon: <Calendar/>,
        head: 'Выборка трафика',
        text: 'Отсеивание шифрованного трафика от нешифрованного, фильтрация пакетов'
    },
    {
        icon: <Layers/>,
        head: 'Создание Proxy-сервера',
        text: 'Настройка VPS под proxy-сервер, написание кода сниффера'
    },
    {
        icon: <Bell/>,
        head: 'Реализация решения',
        text: 'Обучение реккурентной нейронной сети на обучающем наборе и интеграция ее с proxy-сервером'
    }
]

// ABOUT
export const about = [
    {
        head: 'Проблема',
        text: 'Анализ локальной сети, составляющей основу любой корпоративной сети, необходим для поддержания ее в работоспособном состоянии. Под анализом понимается сложный и интеллектуальный процесс осмысления собранной информации, сопоставления ее с данными, полученными ранее, и выработки предположений о возможных причинах замедленной или ненадежной работы сети.',
        pic: pic1
    },
    {
        head: 'Актуальность',
        text: 'Задача анализа требует активного участия человека и использования таких сложных средств, как экспертные системы, аккумулирующие практический опыт многих сетевых специалистов. В то же время, вопрос выбора конкретных объектов для анализа сети и применяемых для этого инструментов является актуальным.',
        pic: pic2
    }
]

// PRODUCT
export const product = {
    title: 'Продукт',
    subtitle: 'Отсканируй QR-код, чтобы увидеть это!',
    qr: qr,
    url: 'https://37.140.199.66',
    susses: 'Ссылка скопирована! ☜(ﾟヮﾟ☜)',
    error: 'Что-то пошло не так ⚠'
}

// PERSPECTIVE
export const perspective = {
    title: 'Перспективы',
    arrow: <ArrowDown/>,
    list: [
        {
            question:'Анализаторы протоколов',
            answer:'Анализаторы протоколов или сетевые сниферы, позволяют захватывать трафик локальных сетей, представлять его в удобном для анализа виде, но собственно анализ данных оставляют администратору'
        },
        {
            question:'Мониторинг маршрутизаторов',
            answer:'Маршрутизаторы, поддерживающие протокол NetFlow, собирают обобщенные данные о трафике глобальных сетей, передавая его для анализа программным системам NetFlow, которые автоматизируют поиск атак и угроз'
        },
        {
            question:'Системы обнаружения вторжений',
            answer:'Системы обнаружения вторжений (Intrusion Detection Systems, IDS) специализируются на автоматическом распознавании вторжений и угроз в прослушиваемом трафике локальных сетей'
        },
        {
            question:'Системы контроля и состояния',
            answer:'Системы контроля трафика и состояния сети административного назначения, основываясь на результатах анализа содержимого пакетов того или иного протокола, можно оптимизировать производительность сети, находить и устранять неполадки, осуществлять обоснованное и взвешенное изменение каких-либо компонентов сети'
        }
    ]
}

// TEAM
export const team = {
    title: 'О Нас',
    arrowLeft: <ArrowLeft/>,
    arrowRight: <ArrowRight/>,
    slides: [
        {
            img: ilim,
            name: 'Илимдар Муратов',
            role: 'Backend-dev: Pyhon, Flask, MongoDB, Ubuntu, ML, traffic analise',
            disc: 'Программист, у которого вместо крови течет кофе. Пока анализируются гигабайты трафика, он успевает превратиться в барбера и подстричь участников в приятной атмосфере'
        },
        {
            img: olesya,
            name: 'Олеся Савченко',
            role: 'Mathematician, mathmodeling; UI/UX designer: Figma',
            disc: 'Прекрасное звено команды. Как любой девушке ей свойственно опаздывать, но точно не сегодня. Сегодня она нацелена во всем преуспеть.'
        },
        {
            img: dima,
            name: 'Дмитрий Никитин',
            role: 'Backend-dev: Pyhon, Flask, traffic analise',
            disc: 'Человек признанный, авторитетный. Терабайты нашего и вашего настроения на этом мероприятии, лицо всей компании, человек которого я глубоко уважаю и люблю'
        },
        {
            img: julia,
            name: 'Юлия Серышева',
            role: 'Backend-dev: Python, algorithmic; UI/UX designer: Figma',
            disc: 'Хоть многое пришлось пропустить из-за работы, но в этом несоизмеримом пространтсве програмирования она выбрала Python, чем отлично нам подходила'
        },
        {
            img: nick,
            name: 'Никита Кодацкий',
            role: 'Frontend-dev: React + Vite, HTML/Sass, ML, traffic analise',
            disc: 'Можно ли подойти к музыканту, чтобы посоветоваться с ним о правильности написанного кода? Нет сомнений! Однако, услуги специалиста платные (но не для всех)'
        }
    ]
}

// CONTACTS
export const contacts = {
    title: 'Контакты',
    list: [
        {
            name:'Илимдар',
            link:'https://t.me/mongooste'
        },
        {
            name:'Дмитрий',
            link:'https://t.me/qw322qw31'
        },
        {
            name:'Юлия',
            link:'https://t.me/uliyya_s'
        },
        {
            name:'Олеся',
            link:'https://t.me/lessia_meow'
        },
        {
            name:'Никита',
            link:'https://t.me/Nidatsky'
        },
    ],
    tg: 'Telegram: ',
    susses: 'скопирована! ☜(ﾟヮﾟ☜)',
    error: 'Что-то пошло не так ಠ_ಠ'
}

// COPYWRITE
export const copywrite = {
    text: 'Сайт-визитка, разработанный в качестве демонстрационных средств продукта',
    city: 'г. Ростов-на-Дону, 2022'
}