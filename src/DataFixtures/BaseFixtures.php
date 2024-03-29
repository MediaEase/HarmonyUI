<?php

declare(strict_types=1);

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;

abstract class BaseFixtures extends Fixture
{
    /**
     * @return array<class-string>
     */
    protected function getAppNames(): array
    {
        return ['AppStore', 'Airsonic', 'Autobrr', 'AutoDL-iRSSi', 'Autoscan',
            'Bazarr', 'Bazarr4K', 'BTSync', 'Calibre', 'Deluge', 'Duplicati', 'Emby Server',
            'Fail2ban', 'FileBot', 'File Browser', 'FlareSolverr', 'Flexget', 'Flood',
            'Headphones', 'Jackett', 'Jellyfin', 'Komga', 'LazyLibrarian', 'Lidarr',
            'Medusa', 'Mylar3', 'Netdata', 'NextCloud', 'Notifiarr', 'noVNC', 'NZBGet', 'NZBHydra2',
            'Ombi', 'OpenVPN', 'Overseerr', 'Plex', 'Prowlarr', 'pyLoad', 'qBittorrent', 'Quassel',
            'Radarr', 'Radarr4K', 'Rapidleech', 'Rclone', 'Readarr', 'Requestrr', 'rTorrent', 'ruTorrent',
            'SABnzbd', 'SeedCross', 'SickChill', 'SickGear', 'Sonarr', 'Sonarr4K', 'Subsonic', 'Syncthing',
            'Tautulli', 'TheLounge', 'Transmission', 'Unpackerr', 'x2Go', 'xTeVe', 'ZNC',
        ];
    }

    /**
     * @return array<class-string>
     */
    protected function getTypes(): array
    {
        return ['media', 'download', 'automation', 'remote'];
    }
}
