import Plant from "./plant";

export default function MyPlants({serchPlants}) {
    
    return (
        <section className="pots">
        <div className="title">
             <h2>Мои растения</h2>
        </div>
        <div className="points">
        {
            serchPlants.map( (e) => 
            !e.alert && <Plant key={e.id} id={e.id} recomendate={e.recomendate} name={e.name} typeId={e.typeId} emotion={e.emotion} /> 
        )
        }
        {
            !serchPlants[0] && <h3 className="notPlant">Такого растения не найдено</h3>

        }
        </div>
   </section>
    )
}