import {useState, useEffect} from 'react';



const useLang = () => {
    // Оголосили змінну стану для збереження мови
    const [lang, setLang] = useState(null); 
   
    /* Спрацьовує при ініціалізації додатка
    1. Якщо lang  не існує, занести в нього 'ua'  по замовчуванню
    2. Отримати значення змінної мви з  localStorage
    3. Якщо воно існує, то замінити ним значення змінної стейту */

    useEffect(() => {
        !lang && setLang('ua'); //1

        let langInLocalStorage = localStorage.getItem('lang'); //2

        langInLocalStorage && setLang(langInLocalStorage);  //3      
    }, []);

    /* Спрацьовує тоді, коли змінна  lang зазнала змін
    Записуємо змінене значення до LocalStorage */
    
    useEffect(()=> {        
        lang && localStorage.setItem('lang', lang);       
    }, [lang])

   
    return [lang, setLang]
}

export default useLang;