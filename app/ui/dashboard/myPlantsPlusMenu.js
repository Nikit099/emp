import PlantDashboardPlusMenu from "./plantDashboardPlusMenu";
import React, { useState } from 'react';
import { useGroupe, usePlantsStore } from '@/app/store/zustand';

export default function MyPlantsPlusMenu({
    serchPlants,
    closePlantChoose,
    addBlock,
    groupeId,
    currentGroupeId,
    getPlantsExceptInDashboard,
    groupeIndex,
    searchQuery,
}) {
    const { plants } = usePlantsStore();
    const { dashboardGroupes } = useGroupe();

    const plantsInDashboard = dashboardGroupes[groupeIndex]?.plantsId;
    
    // Фильтрация растений на основе поискового запроса и отсутствия в группе
    const filteredPlants = plants.filter(
        plant =>
            !plantsInDashboard?.includes(plant.id) &&
            plant.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section className="plantchoose__pots">
            <div className="plantchoose__points">
                {filteredPlants?.map(e => (
                    <PlantDashboardPlusMenu
                        key={e.id}
                        plantId={e.id}
                        groupeId={groupeId}
                        recomendate={e.recomendate}
                        name={e.name}
                        typeId={e.typeId}
                        emotion={e.emotion}
                        closePlantChoose={closePlantChoose}
                        addBlock={addBlock}
                        currentGroupeId={currentGroupeId}
                    />
                ))}
            </div>
        </section>
    );
}
