import {  RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'events', title: 'Events & Notices',  icon: 'event', class: '' },
    { path: 'calendar', title: 'Campus Calendar',  icon:'date_range', class: '' },
    // { path: 'mess', title: 'Mess Menu',  icon:'restaurant_menu', class: '' },
    { path: 'contacts', title: 'Emergency Contacts',  icon:'contacts', class: '' },
    // { path: 'buysell', title: 'Buy/Sell',  icon:'local_mall', class: '' },
    { path: 'lostfound', title: 'Lost/Found',  icon:'location_on', class: '' },
    { path: 'quicklinks', title: 'Quick Links',  icon:'link', class: '' },
    { path: 'papers', title: 'Papers',  icon:'library_books', class: '' },
    // { path: 'travel', title: 'Travel',  icon:'directions_car', class: '' },
    { path: 'timings', title: 'Timings',  icon:'access_time', class: '' },
    { path: 'complaints', title: 'Suggestions',  icon:'content_paste', class: '' },
    // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];
