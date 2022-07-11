export const translations = {
    SUPPORTED_LANGUAGES: [
        {
            name: {
                og: "English",
                en: "English",
                pl: "Angielski",
                bg: "Английски",
                ua: "Английський",
                fr: "Anglais",
                ptbr: "Português (Brasileiro)",
                de: "Englisch",
                it: "Italiano"
            },
            id: "en"
        },
        {
            name: {
                og: "Polski",
                en: "Polish",
                pl: "Polski",
                bg: "Полски",
                ua: "Польский",
                fr: "Polonais",
                ptbr: "Polonês",
                de: "Polnisch",
                it: "Polacco"
            },
            id: "pl"
        },
        {
            name: {
                og: "Български",
                en: "Bulgarian",
                pl: "Bułgarski",
                bg: "Български",
                ua: "Болгарський",
                fr: "Bulgare",
                ptbr: "Bulgária",
                de: "Bulgarisch",
                it: "Bulgaro"
            },
            id: "bg"
        },
        {
            name: {
                og: "Український",
                en: "Ukrainian",
                pl: "Ukraiński",
                bg: "Украински",
                ua: "Український",
                fr: "Ukrainien",
                ptbr: "Ucrâniano",
                de: "Ukrainisch",
                it: "Ucraino"
            },
            id: "ua"
        },
        {
            name: {
                og: "Français",
                en: "French",
                pl: "Francuski",
                bg: "Френски",
                ua: "Французький",
                fr: "Français",
                ptbr: "Francês",
                de: "Französisch",
                it: "Francese"
            },
            id: "fr"
        },
        {
            name: {
                og: "Português (Brasileiro)",
                en: "Portugese (Brazil)",
                pl: "Portugalski (Brazylia)",
                bg: "Португалски (Бразилия)",
                ua: "",
                fr: "",
                ptbr: "Português (Brasileiro)",
                de: "Portugiesisch",
                it: "Portoghese"
            },
            id: "ptbr"
        },
        {
            name: {
                og: "Deutsch",
                en: "German",
                pl: "Niemiecki",
                bg: "Немски",
                ua: "",
                fr: "Allemand",
                ptbr: "",
                de: "Deutsch",
                it: "tedesco"
            },
            id: "de"
        },
        {
            name: {
                og: "",
                en: "Italian",
                pl: "Włoski",
                bg: "",
                ua: "",
                fr: "",
                ptbr: "",
                de: "",
                it: "Italiano"
            },
            id: "it"
        }

    ],
    structure: {
        taskbar: {
            program_launcher: {
                self: {
                    en: "Launcher",
                    pl: "Programy",
                    bg: "Програми",
                    ua: "Програми",
                    fr: "Programme",
                    ptbr: "Lançador",
                    de: "Programme",
                    it: "Programma"
                },
                hover: {
                    en: "Launch programs",
                    pl: "Uruchom programy",
                    bg: "Стартиране на програмите",
                    ua: "Запустити програму",
                    fr: "Execution des programmes",
                    ptbr: "Executar Programas",
                    de: "Programme ausführen",
                    it: "Esegui i programmi"
                }
            },
            programs: {
                en: "Programs",
                pl: "Programy",
                bg: "",
                ua: "",
                fr: "",
                ptbr: "",
                de: "",
                it: "Programmi"
            },
            tray: {
                en: "Tray",
                pl: "Tacka systemowa",
                bg: "",
                ua: "",
                fr: "",
                ptbr: "",
                de: "",
                it: "Area di notifica"
            },
            clock: {
                en: "Clock",
                pl: "Zegar",
                bg: "",
                ua: "",
                fr: "",
                ptbr: "",
                de: "",
                it: "Orologio"
            }
        },
        program_launcher: {
            programs: {
                search_input: {
                    placeholder: {
                        en: "Search programs",
                        pl: "Wyszukaj programy",
                        bg: "",
                        fr: "",
                        ptbr: "",
                        de: "",
                        it: "Cerca programma"
                    }
                }
            },
            action_buttons: {
                shutdown: {
                    en: "Shutdown",
                    pl: "Wyłącz",
                    bg: "",
                    fr: "",
                    ptbr: "",
                    de: "",
                    it: "Spegni"
                },
                reload: {
                    en: "Reload system",
                    pl: "Przeładuj system",
                    bg: "",
                    fr: "",
                    ptbr: "",
                    de: "",
                    it: "Ricarica sistema"
                }
            }
        }
    },
    states: {
        battery: {
            en: "Battery",
            pl: "Bateria",
            bg: "Батерия",
            ua: "Батарея",
            fr: "Batterie",
            ptbr: "Bateria",
            de: "Batterie",
            it: "Batteria",
            charging: {
                en: "Charging",
                pl: "Ładowanie",
                bg: "Зареждане",
                ua: "Заряджання",
                fr: "Mise en charge",
                ptbr: "Carregando",
                de: "Lädt",
                it: "In carica"
            }
        },
        volume: {
            en: "Volume",
            pl: "Głośność",
            bg: "Ниво на звука",
            ua: "Гучність",
            fr: "Volume",
            ptbr: "Volume",
            de: "Lautstärke",
            it: "Volume",
            muted: {
                en: "Muted",
                pl: "Wyciszone",
                bg: "Заглушен",
                ua: "Приглушено",
                fr: "Muet",
                ptbr: "Mudo",
                de: "Ton aus",
                it: "Silenziato"
            }
        },
        connection: {
            en: "Network",
            pl: "Sieć",
            bg: "Мрежа",
            ua: "Мережа",
            fr: "Réseau",
            ptbr: "",
            de: "Netzwerk",
            it: "Rete",
            state: {
                true: {
                    en: "Connected",
                    pl: "Połączony",
                    bg: "Свързан",
                    ua: "З'єднано",
                    fr: "Connecté",
                    ptbr: "Conectado",
                    de: "Verbunden",
                    it: "Connesso"
                },
                false: {
                    en: "Disconnected",
                    pl: "Niepołączony",
                    bg: "Изключен",
                    ua: "Від'єднано",
                    fr: "Déconnecté",
                    ptbr: "Desconectado",
                    de: "Getrennt",
                    it: "Disconnesso"
                }
            }
        }
    },
    dates: {
        months: [
            {
                normal: {
                    en: "January",
                    pl: "Styczeń",
                    bg: "Януари",
                    ua: "Січень",
                    fr: "Janvier",
                    ptbr: "Janeiro",
                    de: "Januar",
                    it: "Gennaio"
                },
                short: {
                    en: "Jan",
                    pl: "Sty",
                    bg: "Яну",
                    ua: "Січ",
                    fr: "Janv",
                    ptbr: "Jan",
                    de: "Jan",
                    it: "Gen"
                }
            },
            {
                normal: {
                    en: "February",
                    pl: "Luty",
                    bg: "Февруари",
                    ua: "Лютий",
                    fr: "Février",
                    ptbr: "Fevereiro",
                    de: "Februar",
                    it: "Febbraio"
                },
                short: {
                    en: "Feb",
                    pl: "Lut",
                    bg: "Фев",
                    ua: "Лют",
                    fr: "Févr",
                    ptbr: "Fev",
                    de: "Feb",
                    it: "Feb"
                }
            },
            {
                normal: {
                    en: "March",
                    pl: "Marzec",
                    bg: "Март",
                    ua: "Березень",
                    fr: "Mars",
                    ptbr: "Março",
                    de: "März",
                    it: "Marzo"
                },
                short: {
                    en: "Mar",
                    pl: "Mar",
                    bg: "Мар",
                    ua: "Бер",
                    fr: "Mars",
                    ptbr: "Mar",
                    de: "Mär",
                    it: "Mar"
                }
            },
            {
                normal: {
                    en: "April",
                    pl: "Kwiecień",
                    bg: "Април",
                    ua: "Квітень",
                    fr: "Avril",
                    ptbr: "Abril",
                    de: "April",
                    it: "Aprile"
                },
                short: {
                    en: "Apr",
                    pl: "Kwi",
                    bg: "Апр",
                    ua: "Кві",
                    fr: "Avr",
                    ptbr: "Abr",
                    de: "Apr",
                    it: "Apr"
                }
            },
            {
                normal: {
                    en: "May",
                    pl: "Maj",
                    bg: "Май",
                    ua: "Травень",
                    fr: "Mai",
                    ptbr: "Maio",
                    de: "Mai",
                    it: "Maggio"
                },
                short: {
                    en: "May",
                    pl: "Maj",
                    bg: "Май",
                    ua: "Трав",
                    fr: "Mai",
                    ptbr: "Maio",
                    de: "Mai",
                    it: "Mag"
                }
            },
            {
                normal: {
                    en: "June",
                    pl: "Czerwiec",
                    bg: "Юни",
                    ua: "Червень",
                    fr: "Juin",
                    ptbr: "Junho",
                    de: "Juni",
                    it: "Giugno"
                },
                short: {
                    en: "Jun",
                    pl: "Cze",
                    bg: "Юни",
                    ua: "Чер",
                    fr: "Juin",
                    ptbr: "Jun",
                    de: "Jun",
                    it: "Giu"
                }
            },
            {
                normal: {
                    en: "July",
                    pl: "Lipiec",
                    bg: "Юли",
                    ua: "Липень",
                    fr: "Juillet",
                    ptbr: "Julho",
                    de: "Juli",
                    it: "Luglio"
                },
                short: {
                    en: "Jul",
                    pl: "Lip",
                    bg: "Юли",
                    ua: "Лип",
                    fr: "Juill",
                    ptbr: "Jul",
                    de: "Jul",
                    it: "Lug"
                }
            },
            {
                normal: {
                    en: "August",
                    pl: "Sierpień",
                    bg: "Август",
                    ua: "Серпень",
                    fr: "Août",
                    ptbr: "Agosto",
                    de: "August",
                    it: "Agosto"
                },
                short: {
                    en: "Aug",
                    pl: "Sie",
                    bg: "Авг",
                    ua: "Се",
                    fr: "Août",
                    ptbr: "Ago",
                    de: "Aug",
                    it: "Ago"
                }
            },
            {
                normal: {
                    en: "September",
                    pl: "Wrzesień",
                    bg: "Септември",
                    ua: "Вересень",
                    fr: "Septembre",
                    ptbr: "Setembro",
                    de: "September",
                    it: "Settembre"
                },
                short: {
                    en: "Sep",
                    pl: "Wrz",
                    bg: "Сеп",
                    ua: "Вер",
                    fr: "Septembre",
                    ptbr: "Set",
                    de: "Sep",
                    it: "Set"
                }
            },
            {
                normal: {
                    en: "October",
                    pl: "Październik",
                    bg: "Октомври",
                    ua: "Жовтень",
                    fr: "Octobre",
                    ptbr: "Outubro",
                    de: "Oktober",
                    it: "Ottobre"
                },
                short: {
                    en: "Oct",
                    pl: "Paź",
                    bg: "Окт",
                    ua: "Жовт",
                    fr: "Oct",
                    ptbr: "Out",
                    de: "Okt",
                    it: "Ott"
                }
            },
            {
                normal: {
                    en: "November",
                    pl: "Listopad",
                    bg: "Ноември",
                    ua: "Листопад",
                    fr: "Novembre",
                    ptbr: "Novembro",
                    de: "November",
                    it: "Novembre"
                },
                short: {
                    en: "Nov",
                    pl: "Lis",
                    bg: "Ное",
                    ua: "Лис",
                    fr: "Nov",
                    ptbr: "Nov",
                    de: "Nov",
                    it: "Nov"
                }
            },
            {
                normal: {
                    en: "December",
                    pl: "Grudzień",
                    bg: "Декември",
                    ua: "Грудень",
                    fr: "Décembre",
                    ptbr: "Dezembro",
                    de: "Dezember",
                    it: "Dicembre"
                },
                short: {
                    en: "Dec",
                    pl: "Gru",
                    bg: "Дек",
                    ua: "Гру",
                    fr: "Déc",
                    ptbr: "Dez",
                    de: "Dez",
                    it: "Dic"
                }
            }
        ],
        time: {
            milisecond: {
                en: "Milisecond",
                pl: "Milisekunda",
                bg: "Милисекунда",
                ua: "Мілісекунда",
                fr: "Milliseconde",
                ptbr: "Milisegundo",
                de: "Millisekunde",
                it: "Millisecondo"
            },
            second: {
                en: "Second",
                pl: "Sekunda",
                bg: "Секунда",
                ua: "Секунда",
                fr: "Seconde",
                ptbr: "Segundo",
                de: "Sekunde",
                it: "Secondo"
            },
            minute: {
                en: "Minute",
                pl: "Minuta",
                bg: "Минута",
                ua: "Хвилина",
                fr: "Minute",
                ptbr: "Minuto",
                de: "Minute",
                it: "Minuto"
            },
            hour: {
                en: "Hour",
                pl: "Godzina",
                bg: "Час",
                ua: "Година",
                fr: "Heure",
                ptbr: "Hora",
                de: "Stunde",
                it: "Ora"
            },
            day: {
                en: "Day",
                pl: "Dzień",
                bg: "Ден",
                ua: "День",
                fr: "Jour",
                ptbr: "Dia",
                de: "Tag",
                it: "Giorno"
            },
            week: {
                en: "Week",
                pl: "Tydzień",
                bg: "Седмица",
                ua: "Тиждень",
                fr: "Semaine",
                ptbr: "Semana",
                de: "Woche",
                it: "Settimana"
            },
            month: {
                en: "Month",
                pl: "Miesiąc",
                bg: "Месец",
                ua: "Місяць",
                fr: "Mois",
                ptbr: "Mês",
                de: "Monat",
                it: "Mese"
            },
            year: {
                en: "Year",
                pl: "Rok",
                bg: "Година",
                ua: "Рік",
                fr: "Année",
                ptbr: "Ano",
                de: "Jahr",
                it: "Anno"
            }
        }
    }
}

export function get_translation(language = String, translation = String) {
    return eval(`translations.${translation}.${language}`);
}
