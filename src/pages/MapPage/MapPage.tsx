import React from "react";
import styles from "pages/MapPage/MapPage.module.scss";
import { useMapPageLogic } from "pages/MapPage/MapPage.logic";
import { SearchBar } from "components/SearchBar";
import { YMaps, Map } from "react-yandex-maps";

export interface MapPageProps {}

export const MapPage:React.FunctionComponent<MapPageProps> = (props) => {

    const logic = useMapPageLogic(props);

    const mapData = {
        center: [55.751574, 37.573856],
        zoom: 5,
    };

    return <div className={styles["map-page"]}>
        <SearchBar placeholder={"Find your city"} />
        <div className={styles["map"]}>
            <YMaps>
                <Map defaultState={{ center: [55.75, 37.57], zoom: 15 }} />
            </YMaps>
        </div>
    </div>
}