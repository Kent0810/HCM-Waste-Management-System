import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const translationEn = {
    Administration: "Administration",
    Analytics: "Analytics",
    Customer: "Customer",
    Checkout: "Checkout",
    Dashboard: "Dashboard",
    Hello: "Hello",
    Inbox: "Inbox",
    Sales: "Sales",
    Settings: "Settings",
    Profile: "Profile",
    UWC: "UWC",
    Overview: "Dashboard Overview",
}
const translationVi = {
    Administration: "Quản Lý",
    Analytics: "Thông Số",
    Customer: "Khách Hàng",
    Checkout: "Thoát",
    Dashboard: "Điều Khiển",
    Hello: "Xin Chào",
    Inbox: "Inbox",
    Sales: "Doanh Thu",
    Settings: "Cài Đặt",
    Profile: "Thông Tin",
    UWC: "UWC",
    Overview: "Tổng Quan",
}

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: translationEn
        },
        vn: {
            translation: translationVi
        }
    },
    lng: 'vn',
    fallbackLng: 'vn',
    interpolation: {
        escapeValue: false
    }
})

export default i18n