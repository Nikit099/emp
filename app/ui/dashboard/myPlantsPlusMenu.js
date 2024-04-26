import PlantDashboardPlusMenu from "./plantDashboardPlusMenu";
import { usePlantsStore } from "@/app/store/zustand";

export default function MyPlantsPlusMenu({serchPlants, 
                                          closePlantChoose,
                                          handleAddBlock,}) {
    
    const { plants } = usePlantsStore();

    return (
        <section className="plantchoose__pots">
        
        <div className="plantchoose__points">
        {
            plants.map( (e) => <PlantDashboardPlusMenu key={e.id} 
                                                     id={e.id} 
                                                    recomendate={e.recomendate} 
                                                    name={e.name} 
                                                    typeId={e.typeId} 
                                                    emotion={e.emotion}
                                                    closePlantChoose={closePlantChoose}
                                                    handleAddBlock={handleAddBlock} /> 
        )
        }
        {
            !serchPlants[0] && <h3 className="notPlant">Такого растения не найдено</h3>

        }
        </div>
   </section>
    )
}