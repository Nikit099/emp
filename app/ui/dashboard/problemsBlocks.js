import { usePlantsStore } from "@/app/store/zustand";

export default function ProblemsBlocks({problem, name, message, dateStart, dateEnd, plantId }) {

    const {plants} = usePlantsStore();

    const plantName = plants.find(e => e.id == plantId).name;

    return (
        <div className="messagebox">
            <div className="messagebox__plant_name">
                {plantName}
            </div>
            <div className="messagebox__graph_block">
                <div className="messagebox__graph_title">
                    {name} {dateStart} - {dateEnd}
                </div>
                <div className="messagebox__graph"></div>
            </div>
            <div className="messagebox__message_block">
                <div className="messagebox__message">
                    <div className="messagebox__message_title">
                        С 14ч 56мин До 18ч 56мин
                    </div>
                    <div className="messagebox__message_description">
                        {message}
                    </div>
                </div>
            </div>
            <div className="messagebox__hr"></div>
        </div>
    );
}
