import PlantDashboardPlusMenu from "./plantDashboardPlusMenu";
import { useGroupe, usePlantsStore } from "@/app/store/zustand";

export default function MyPlantsPlusMenu({serchPlants, 
                                          closePlantChoose,
                                          addBlock,
                                          groupeId,
                                          currentGroupeId,
                                          getPlantsExceptInDashboard,
                                          groupeIndex,
                                        }) {
    
    const { plants } = usePlantsStore();
    const { dashboardGroupes } = useGroupe();

    const plantsInDashboard = dashboardGroupes[groupeIndex]?.plantsId;
    const filteredPlants = plants.filter(plant => !plantsInDashboard?.includes(plant.id));

    return (
        <section className="plantchoose__pots">
        
        <div className="plantchoose__points">
        {
            filteredPlants?.map( e => <PlantDashboardPlusMenu    key={e.id} 
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
                        )
        }
        
        </div>
   </section>
    )
}