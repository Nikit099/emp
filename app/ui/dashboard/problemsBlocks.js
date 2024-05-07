import { usePlantsStore } from "@/app/store/zustand";

import "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function ProblemsBlocks({problem, name, message, dateStart, dateEnd, plantId, problemData }) {

    const {plants, data} = usePlantsStore();

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
                <div className="messagebox__graph">
                    <Line data={{
                                    labels: ['1 января', '2 января', '3 января', '4 января'],
                                    datasets: [{
                                        label: `Пока не заполнено`,
                                        data: problemData,
                                        fill: false,
                                        borderColor: 'rgb(73, 133, 83)',
                                        tension: 0.4,
                                    },],
                                }}
                            options={{
                                responsive: true,
                                maintainAspectRatio: true,
                                plugins: {
                                    legend: {
                                        display: false,
                                        labels: {
                                            //color: 'rgb(255, 99, 132)'
                                        }
                                    }
                                }
                            }}>
                    </Line>
                </div>
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
