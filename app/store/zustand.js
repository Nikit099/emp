import { create } from "zustand";
import { persist } from "zustand/middleware";
import AuthService from "../scripts/api.auth";

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

        data: [
            {
                id: 89,
                plantId:97856,
                daysHum: 4,
                dateHum: null,
                daysSpr: null,
                dateSpr: null,
                spraing: false,
                watering: false,
                humidity: 44,
                temperature: 22,
                illumination: 78,
                airHum: 45,
                humidityProblems: [],
                temperatureProblems: [{
                    name: 'Температура',
                    message: 'Это сообщение об уходе за Татьяной',
                    dateStart: `${getTimeString()}`,
                    dateEnd: `${getTimeString()}`,
                    problemData: [30, 45, 49, 50],
                                    }],
                illuminationProblems: [],
                airHumProblems: [],

                // measurmentsDate: 
                
                
            },
            {
                id: 78,
                plantId:9756 ,
                daysHum: 4,
                dateHum: null,
                daysSpr: null,
                dateSpr: null,
                spraing: false,
                watering: false,
                humidity: 44,
                temperature: 22,
                illumination: 78,
                airHum: 45,
                humidityProblems: [],
                temperatureProblems: [],
                illuminationProblems: [],
                airHumProblems: [],

                
            },
            {
                id: 67,
                plantId:6345 ,
                humidity: 44,
                daysHum: 4,
                dateHum: null,
                daysSpr: null,
                dateSpr: null,
                spraing: false,
                watering: false,
                temperature: 22,
                illumination: 78,
                airHum: 45,
                humidityProblems: [],
                temperatureProblems: [],
                illuminationProblems: [],
                airHumProblems: [],

                
            },
            {
                id: 56,
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
                airHum: 45,
                humidityProblems: [],
                temperatureProblems: [{
                    name: 'Температура',
                    message: 'Это сообщение об уходе за Ниной температура 1',
                    dateStart: `${getTimeString()}`,
                    dateEnd: `${getTimeString()}`,
                    problemData: [30, 45, 49, 50],
                                    },{
                    name: 'Температура',
                    message: 'Это сообщение об уходе за Ниной температура 2',
                    dateStart: `${getTimeString()}`,
                    dateEnd: `${getTimeString()}`,
                    problemData: [30, 45, 49, 50],
                                    }],
                illuminationProblems: [{
                    name: 'Освещение',
                    message: 'Это сообщение об уходе за Ниной по освещению 3',
                    dateStart: `${getTimeString()}`,
                    dateEnd: `${getTimeString()}`,
                    problemData: [30, 45, 49, 50],
                                }],
                airHumProblems: [],

                
            },
            {
                id: 45,
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
                airHum: 45,
                humidityProblems: [],
                temperatureProblems: [],
                illuminationProblems: [],
                airHumProblems: [],
            },
        ],
        customNorms: [
            {
                id: 48294,
                plantId: 9756,
                norms: [
                    {
                        name: 'temperature',
                        max: 29,
                        min: 10,
                    },
                     {
                        name: 'illumination',
                        max: 29,
                        min: 10,
                    },
                     {
                        name:'humidity',
                        max: 100,
                        min: 43,
                    },
                    {
                        name: 'airHum',
                        max: 100,
                        min: 30,
                    }
                ]
                    
                    
            },
            {
                id: 4363,
                plantId: 6345,
                norms: [{
                        name: 'temperature',
                        max: 29,
                        min: 10,
                    },
                     {
                        name: 'illumination',
                        max: 19,
                        min: 20,
                    },
                     {
                        name:'humidity',
                        min: 64
                    },
                    {
                        name: 'airHum',
                        min: 85
                    }
                ]
            },
                
        ],
        dayHistory: [
            {
                id: 97356,
                plantId:9756 ,
                humidityDay: [32, 54, 52, 62, 44, 44],
                temperatureDay: [12, 54, 78, 32, 22, 22],
                illuminationDay: [12, 23, 34, 45, 78, 78],
                airHumDay: [2, 23, 12, 86, 45, 45],
            },
            {
                id: 97564,
                plantId:97856 ,
                humidityDay: [32, 54, 52, 62, 26, 63],
                temperatureDay: [12, 54, 78, 32, 34, 73],
                illuminationDay: [12, 23, 34, 45, 56, 67],
                airHumDay: [2, 23, 12, 86, 76, 61],
            },
            {
                id: 92756,
                plantId: 6345,
                humidityDay: [32, 54, 52, 62, 26, 63],
                temperatureDay: [12, 54, 78, 32, 34, 73],
                illuminationDay: [12, 23, 34, 45, 56, 67],
                airHumDay: [2, 23, 12, 86, 76, 61],
            },
        ],
        weekHistory: [
            {
                id: 43222,
                plantId: 9756,
                humidityWeek: [14, 45, 84, 38, 93, 8],
                temperatureWeek: [54, 39, 4, 39, 39, 8],
                illuminationWeek: [59, 39, 68, 39, 3, 4],
                airHumWeek: [93, 18, 34, 4, 4, 4],
            },
            {
                id: 432322,
                plantId: 6345,
                humidityWeek: [14, 45, 84, 38, 93, 8],
                temperatureWeek: [54, 39, 4, 39, 39, 8],
                illuminationWeek: [59, 39, 68, 39, 3, 4],
                airHumWeek: [93, 18, 34, 4, 4, 4],
            },

        ],
        monthHistory: [
            {
                id: 34532,
                plantId: 9756,
                humidityMonth: [49, 49, 48, 39, 19, 1],
                temperatureMonth: [94, 39, 30, 39, 3, 20],
                illuminationMonth: [95, 2, 59, 59, 30, 18],
                airHumMonth: [18, 49, 50, 59, 40, 30, 18],
            },
            {
                id: 334532,
                plantId: 6345,
                humidityMonth: [49, 49, 48, 39, 19, 1],
                temperatureMonth: [94, 39, 30, 39, 3, 20],
                illuminationMonth: [95, 2, 59, 59, 30, 18],
                airHumMonth: [18, 49, 50, 59, 40, 30, 18],
            },
        ],
        changeName: (newName, plantId) => set((state) => ({plants: state.plants.map(e => e.id === plantId ? {...e, name: newName} : e)}) ), 
        incPlant: (newPlant) => set((state ) => ({ plants: [...state.plants, newPlant] })),
        changeTypePlant: (typeId, plantId) => set((state) => ({plants: state.plants.map(e => e.id == plantId ? {...e, typeId: typeId} : e)})),
        deletPlant: (plantId) => set((state) => ({plants: state.plants.filter(e => e.id != plantId) })),
        setCastomNorms: (normId, newNorm) => set((state) => ({castomNorms: state.castomNorms.map(e => e.id === normId ? {...e, norms: newNorm } : {...e})})),
    }
    

)
  
);

function getTimeString() {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

export const useGroupe = create(
    
        (set) => ({
            dashboardGroupes: [
                {
                    name: 'name 1',
                    id: 1,
                    plantsId: [], 
                },
            ],
            
            setDashboardGroupes: (newDashboardGroupes) =>
                set((state) => ({ dashboardGroupes: newDashboardGroupes })),            
            addGroupe: (newGroupe) => set(state => ({
                dashboardGroupes: [
                    ...state.dashboardGroupes, newGroupe
                ]
            })),
            deleteGroupe: (groupeId) => set(state => ({
                dashboardGroupes: 
                    state.dashboardGroupes.filter(groupe => groupe.id !== groupeId)
            })),
            addBlock: (plantId) => set((state) => ({
                dashboardGroupes: state.dashboardGroupes.map(groupe => {
                    // Проверяем, содержится ли plantId уже в plantsId данной группы
                    if (groupe.plantsId.includes(plantId)) {
                        // Если содержится, возвращаем группу без изменений
                        return groupe;
                    } else {
                        // Если не содержится, добавляем его в массив plantsId группы
                        return {
                            ...groupe,
                            plantsId: [...groupe.plantsId, plantId]
                        };
                    }
                })
            }))
        }),    
);
export const authStore = create(
    (set) => ({
        isAuth: false,
        isAuthInProgress: false,
        login: async (email, password) => {
            set({ isAuthInProgress: true })
            try {
                const resp = await AuthService.login(email, password);
                localStorage.setItem("token", resp.data.accessToken);
                set({ isAuth: true })

          
               } catch (err) {
                console.log("login error");
               } finally {
                set({ isAuthInProgress: false })
              } 
          },
        checkAuth: async() => {
            set({ isAuthInProgress: true })
            try {
                const resp = await AuthService.refresh();
                localStorage.setItem("token", resp.data.accessToken);
                set({ isAuth: true })


            } catch (err) {
                console.log("login error");
            } finally {
                set({ isAuthInProgress: false })

            } 
        },
        logout: async() => {
            set({ isAuthInProgress: true })

            try {
            await AuthService.logout();
            set({ isAuth: false })

            localStorage.removeItem("token");
            } catch (err) {
            console.log("logout error");
            } finally {
                set({ isAuthInProgress: false })

            } 
        }
        
    })
)