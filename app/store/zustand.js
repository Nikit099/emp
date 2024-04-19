import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCountStore = create(
    persist(
        (set) => ({
          count: 3333,
          inc: () => set((state) => ({ count: state.count + 10 })),
          dec: () => set((state) => ({ count: state.count - 10 })),
        }),
        {
          name: "counterstore",
        }
      )
);
export const useSearchStore = create(
    persist(
        (set) => ({
            search: '',
            setSearch: (value) => set(() => ({ search: value })),
        }),
        {
          name: "typePlantsStore",
        }
      )
)
export const usePlantsStore = create(

    (set) => ({
        typePlants: [
            {id: 1,
             type: "Dracena Fr.",
             title: "Драцена феноменальное растение, всегда поможет вам в нужную минуту, снимет спазмы и боль, кроме того, способно развить у вас крапиноз.",
             recomendation: {
                humidity: {
                    min: 30,
                    status: true
                },
                temperature: {
                    max: 34,
                    high: 29,
                    low: 10,
                    min: 5,
                    status: true
                },
                illumination: {
                    max: 53,
                    high: 42,
                    low: 20,
                    veryLow: 15,
                    min: 7 ,
                    status: true
                },
                airHum: {
                    min: 27,
                    hydrophobic: false,
                    status: true
                }
             }
            },
            {id: 2,
                type: "Melaniya So.",
                title: "Драцена феноменальное растение, всегда поможет вам в нужную минуту, снимет спазмы и боль, кроме того, способно развить у вас крапиноз.",
                recomendation: {
                   humidity: {
                       min: 30,
                       status: true
                   },
                   temperature: {
                       max: 34,
                       high: 29,
                       low: 10,
                       min: 5,
                       status: true
                   },
                   illumination: {
                       max: 53,
                       high: 42,
                       low: 20,
                       veryLow: 15,
                       min: 7 ,
                       status: true
                   },
                   airHum: {
                       min: 27,
                       hydrophobic: false,
                       status: true
                   }
                }
            },
            {id: 3,
            type: "Notik Ne",
            title: "Драцена феноменальное растение, всегда поможет вам в нужную минуту, снимет спазмы и боль, кроме того, способно развить у вас крапиноз.",
            recomendation: {
               humidity: {
                   min: 30,
                   status: true
               },
               temperature: {
                   max: 34,
                   high: 29,
                   low: 10,
                   min: 5,
                   status: true
               },
               illumination: {
                   max: 53,
                   high: 42,
                   low: 20,
                   veryLow: 15,
                   min: 7 ,
                   status: true
               },
               airHum: {
                   min: 27,
                   hydrophobic: false,
                   status: true
               }
            }
            },
            {id: 4,
                type: "Dodus Ne",
                title: "Драцена феноменальное растение, всегда поможет вам в нужную минуту, снимет спазмы и боль, кроме того, способно развить у вас крапиноз.",
                recomendation: {
                   humidity: {
                       min: 30,
                       status: true
                   },
                   temperature: {
                       max: 34,
                       high: 29,
                       low: 10,
                       min: 5,
                       status: true
                   },
                   illumination: {
                       max: 53,
                       high: 42,
                       low: 20,
                       veryLow: 15,
                       min: 7 ,
                       status: true
                   },
                   airHum: {
                       min: 27,
                       hydrophobic: false,
                       status: true
                   }
                }
            },
        ],
        plants: [
            {
                id: 55353,
                name: 'Kolya',
                typeId: 2,
                recomendate: "Kolya немыслимо холодно, поставьте на зажженую плиту листьями вниз",
                alert: true,
                emotion: "coold",
                img: ''
            },
            {
                id: 13543,
                name: 'Nina',
                typeId: 1,
                recomendate: "Растению очень жарко, поставте в морозилку",
                alert: true,
                emotion: "fair",
                img: ''
            },
            {
                id: 6345,
                name: 'Vasia',
                typeId: 2,
                recomendate: "Полейте через 2 часа",
                alert: true,
                emotion: "good",
                img: ''
            },
            {
                id: 9756,
                name: 'Frosya',
                typeId: 4,
                recomendate: "Полейте через 3 часа",
                alert: false,
                emotion: "good",
                img: ''
            },
            {
                id: 97856,
                name: 'Tanya',
                typeId: 3,
                recomendate: "Полейте через 3 часа",
                alert: false,
                emotion: "good",
                img: ''
            },
        ],
        date: [
            {
                id: 89,
                plantId:97856 ,
                humidity: 44,
                daysHum: 4,
                dateHum: null,
                daysSpr: null,
                dateSpr: null,
                spraing: false,
                watering: false,
                temperature: 22,
                illumination: 78,
                // measurmentsDate: 
                
            },
            {
                id: 78,
                plantId:9756 ,
                humidity: 44,
                daysHum: 4,
                dateHum: null,
                daysSpr: null,
                dateSpr: null,
                spraing: false,
                watering: false,
                temperature: 22,
                illumination: 78,
                
            },
            {
                id: 67,
                plantId:97856 ,
                humidity: 44,
                daysHum: 4,
                dateHum: null,
                daysSpr: null,
                dateSpr: null,
                spraing: false,
                watering: false,
                temperature: 22,
                illumination: 78,
                
            },
            {
                id: 56,
                plantId:55353 ,
                humidity: 44,
                daysHum: 4,
                dateHum: null,
                daysSpr: null,
                dateSpr: null,
                spraing: false,
                watering: false,
                temperature: 22,
                illumination: 78,
                
            },
            {
                id: 45,
                plantId:13543 ,
                humidity: 44,
                daysHum: 4,
                dateHum: null,
                daysSpr: null,
                dateSpr: null,
                spraing: false,
                watering: false,
                temperature: 22,
                illumination: 78,
                
            },
        ],
        castomNorms: [
            {
                id: 48294,
                plantId: 97856,
                temperature: {
                    high: 29,
                    low: 10,
                    },
                    illumination: {
                        high: 29,
                        low: 10,
                    },
                    humidity: {
                        min: 43
                    },
                    airHum:{
                        min: 30
                    }
            },
            {
                id: 4363,
                plantId: 55353,
                temperature: {
                     high: 29,
                     low: 10,
                     },
                     illumination: {
                         high: 29,
                         low: 10,
                     },
                     humidity: {
                         min: 43
                     },
                     airHum:{
                         min: 30
                     }
            },
                
        ],
        incPlant: (newPlant) => set((state ) => ({ plants: [...state.plants, newPlant] })),

    }
    

)
  
)
export const useSetNorms = create( (set) => ({
    
  }))
