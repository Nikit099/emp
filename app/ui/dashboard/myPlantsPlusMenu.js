import PlantDashboardPlusMenu from "./plantDashboardPlusMenu";

export default function MyPlantsPlusMenu({serchPlants, closePlantChoose}) {
    
    return (
        <section className="plantchoose__pots">
        
        <div className="plantchoose__points">
        {
            serchPlants.map( (e) => 
            !e.alert && <PlantDashboardPlusMenu key={e.id} 
                                        id={e.id} 
                                        recomendate={e.recomendate} 
                                        name={e.name} 
                                        typeId={e.typeId} 
                                        emotion={e.emotion}
                                        closePlantChoose={closePlantChoose} /> 
        )
        }
        {
            !serchPlants[0] && <h3 className="notPlant">Такого растения не найдено</h3>

        }
        </div>
   </section>
    )
}