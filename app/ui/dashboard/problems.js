import plus from '@/public/dashboard/plus.svg';

import Image from 'next/image';

import { usePlantsStore } from "@/app/store/zustand"
import ProblemsBlocks from './problemsBlocks';


export default function Problems ({closeProblems,}) {
    
    const {data} = usePlantsStore();

    const plantsWithProblems = data.filter(e => (
                                        e.temperatureProblems.length ||
                                        e.illuminationProblems.length ||
                                        e.humidityProblems.length ||
                                        e.airHumProblems.length
                                    ));
    
    const problems = [];
    for (let e of plantsWithProblems) {
        if (e.temperatureProblems && e.illuminationProblems && e.humidityProblems && e.airHumProblems) {
            const temperatureProblemsWithPlantId = e.temperatureProblems.map(problem => ({
                ...problem,
                plantId: e.plantId
            }));
            const illuminationProblemsWithPlantId = e.illuminationProblems.map(problem => ({
                ...problem,
                plantId: e.plantId
            }));
            const humidityProblemsWithPlantId = e.humidityProblems.map(problem => ({
                ...problem,
                plantId: e.plantId
            }));
            const airHumProblemsWithPlantId = e.airHumProblems.map(problem => ({
                ...problem,
                plantId: e.plantId
            }));
    
            problems.push(
                ...temperatureProblemsWithPlantId,
                ...illuminationProblemsWithPlantId,
                ...humidityProblemsWithPlantId,
                ...airHumProblemsWithPlantId
            );
        }
    }
                                    

    
 

    return (
        <>
            <aside className="side_panel">
                <div className="side_panel__container">
                    <div className="side_panel__header">
                        <div className='side_panel__header_left'>
                            <span className="side_panel__title">
                                Возникшие проблемы
                            </span>
                        </div>
                        <div className='side_panel__header_right'>
                            <Image className='side_panel__header_close'
                                    src={plus}
                                    alt='закрыть'
                                    onClick={closeProblems}>

                            </Image>
                        </div>
                    </div>
                    <div className='messagebox_wrapper'>
                        {console.log('plantsWithProblems:', plantsWithProblems, 'problems:', problems)}
                        {
                            problems.map((problem, index) => (
                                <ProblemsBlocks
                                    key={`${problem.name}-${index}`}
                                    problem={problem}
                                    name={problem.name}
                                    message={problem.message}
                                    dateStart={problem.dateStart}
                                    dateEnd={problem.dateEnd}
                                    plantId={problem.plantId}
                                    problemData={problem.problemData}
                                />
                            ))
                        }

                    </div>
                </div>
            </aside>
        </>
    )
}