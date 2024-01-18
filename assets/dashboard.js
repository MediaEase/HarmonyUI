import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
// styles
import './styles/app.css';
import './styles/app-cards.css';
import './styles/progress-circle.css';
import './styles/app-store.css';

import './js/clipboard.js';
import WidgetManager from './js/widgets/WidgetManager.js';
import AppManager from './js/app/AppManager.js';
import AppStore from './js/app/AppStore.js';
import { fetchData } from './js/utils.js';
import { processDataForCpuWidget } from './js/widgets/cpuWidget.js';
import { processDataForRamWidget } from './js/widgets/memoryWidget.js';
import { processDataForDiskWidget } from './js/widgets/diskWidget.js';
import { processDataForClientWidget } from './js/widgets/clientWidget.js';
import ViewSwitcher from './js/app/ViewSwitcher.js';

const availableWidgets = await fetchData('/api/widgets');
const transformedWidgets = availableWidgets.map(widget => ({
    type: widget.type,
    name: widget.altName,
    url: `/api/metric/${widget.type}`,
    processData: chooseProcessDataFunction(widget.type)
}));

function chooseProcessDataFunction(type) {
    switch (type) {
        case 'cpu':
            return processDataForCpuWidget;
        case 'mem':
            return processDataForRamWidget;
        case 'disk':
            return processDataForDiskWidget;
        case 'clients':
            return processDataForClientWidget;
        default:
            return null;
    }
}

const dashboard = document.querySelector('[data-widget-panel]');
const page = document.body.getAttribute('data-page');
const preferencesData = await fetchData('/api/me/preferences');
const appsData = await fetchData('/api/me/my_apps');
const storeData = await fetchData('/api/store');
const timeInterval = 5000;

if (dashboard) {
    const widgetManager = new WidgetManager(transformedWidgets, preferencesData);
    const appManager = new AppManager(timeInterval, appsData, preferencesData, page);
    const store = new AppStore(storeData, appsData);
    widgetManager.initialize();
    appManager.initialize();
    store.initialize();
    new ViewSwitcher();
}

import { toDarkMode, toLightMode } from './js/menus/theme_switcher.js';

window.toDarkMode = toDarkMode;
window.toLightMode = toLightMode;

import {
    Tab,
    Modal,
    Popover,
    Ripple,
    initTE,
} from "tw-elements";

initTE({ Modal, Popover, Ripple, Tab });
