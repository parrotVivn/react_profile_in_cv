import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next)
    .init({
        lng: "enUS",
        fallbackLng: "enUS",
        debug: false,
        resources: {
            enUS: {
                translation: {
                    "Lang": "English",
                    "Welcome to React": "Welcome to React and react-i18next",
                    "Sign In": "Sign In",
                    "Language option": "Language option",
                    "Forgot password": "Forgot password",
                    "Don't have an account? Sign Up": "Don't have an account? Sign Up",
                    "Register": "Register",
                    "Works": "Works",
                    "Source": "Source",
                    "Dark": "Drak",
                    "Light": "Light",
                    "About me": "About me",
                    "Dashboard": "Dashboard",
                    "MySelf": "Hello, I'm an indie app developer based in Vietnam!",
                    "Developer": "Developer",
                    "My skill": "My skill",
                },
            },
            viVN: {
                translation: {
                    "Lang": "Việt Nam",
                    "Welcome to React": "Chào cưng",
                    "Sign In": "Đăng nhập",
                    "Language option": "Tùy chọn ngôn ngữ",
                    "Forgot password": "Quên mật khẩu?",
                    "Don't have an account? Sign Up": "Bạn chưa có tài khoản? Đăng ký",
                    "Register": "Đăng ký",
                    "Works": "Làm",
                    "Source": "Nguồn",
                    "Dark": "Tối",
                    "Light": "Sáng",
                    "About me": "Về tôi",
                    "Dashboard": "Bảng điều khiển",
                    "MySelf": "Xin chào, tôi là nhà phát triển ứng dụng độc lập tại Việt Nam!",
                    "Developer": "Nhà phát triển",
                    "My skill": "Kỹ năng của tôi",
                },
            },
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;


