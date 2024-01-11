import { fetchData } from '../utils.js';
import AppStatusUpdater from './AppStatusUpdater.js';
class ViewSwitcher {
    constructor() {
        this.btnViewCards = document.getElementById('btnViewCards');
        this.btnViewTable = document.getElementById('btnViewTable');
        this.bindEvents();
        this.fetchData = fetchData;
    }

    bindEvents() {
        this.btnViewCards.addEventListener('click', (event) => {
            event.preventDefault();
            this.switchView('grid', 'list', 'grid', () => {
                this.getAppStatus();
            });
        });

        this.btnViewTable.addEventListener('click', (event) => {
            event.preventDefault();
            this.switchView('list', 'grid', 'block', () => {
                this.getAppStatus();
            });
        });
    }

    switchView(showId, hideId, displayType) {
        document.getElementById(showId).style.display = displayType;
        document.getElementById(hideId).style.display = 'none';
        const data = { display: showId };
        this.fetchData('/api/me/preferences/display', 'PATCH', data);
        this.getAppStatus();
    }

    getAppStatus() {
        this.fetchData('/api/me/services/status')
            .then(appStatusData => {
                const appStatusUpdater = new AppStatusUpdater(appStatusData);
                appStatusUpdater.updateStatus(appStatusData);
            })
            .catch(error => {
                console.error('Error fetching app status:', error);
            });
    }
}

export default ViewSwitcher;
