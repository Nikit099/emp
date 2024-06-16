import Plant from "./plant";

export default function MyPlants({serchPlants, closePlantChoose}) {
    
    return (
        <section className="pots">
            {
                 serchPlants[0] && <h3 className="myPlantsTitile">Мои растения</h3>
            }
        
        <div className="points">
        {
            serchPlants.map( (e) => 
            !e.alert && <Plant key={e.id} 
                                        id={e.id} 
                                        img={e.img}
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