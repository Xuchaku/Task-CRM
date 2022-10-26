import { ReactComponent as home } from "./../assets/svgs/home.svg";
import { ReactComponent as search } from "./../assets/svgs/search.svg";
import { ReactComponent as tables } from "./../assets/svgs/tables.svg";
import { ReactComponent as dates } from "./../assets/svgs/dates.svg";
import { ReactComponent as maps } from "./../assets/svgs/maps.svg";
import { ReactComponent as vidgets } from "./../assets/svgs/vidgets.svg";
import { ReactComponent as settings } from "./../assets/svgs/settings.svg";
import { ReactComponent as settingsProfile } from "./../assets/svgs/settings_profile.svg";
import { ReactComponent as finances } from "./../assets/svgs/finances.svg";
import { ReactComponent as out } from "./../assets/svgs/out.svg";
import Menu from "../types/Menu/Menu";

export const menu: Menu[] = [
  { text: "Главная", component: home, id: 0 },
  { text: "Поиск адресов", component: search, id: 1 },
  { text: "Таблицы", component: tables, id: 2 },
  { text: "Календарь", component: dates, id: 3 },
  { text: "Карты", component: maps, id: 4 },
  { text: "Виджеты", component: vidgets, id: 5 },
  {
    text: "Настройки",
    component: settings,
    id: 6,
    children: [
      { text: "Настройки профиля", component: settingsProfile, id: 7 },
      { text: "Управление финансами", component: finances, id: 8 },
    ],
  },

  { text: "Выход", component: out, id: 9 },
];
