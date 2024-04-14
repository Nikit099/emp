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
             title: "Драцена феноменальное растение, всегда поможет вам в нужную минуту, снимет спазмы и боль, кроме того, способно развить у вас крапиноз."
            },
            {id: 2,
                type: "Melaniya So.",
                title: "Драцена феноменальное растение, всегда поможет вам в нужную минуту, снимет спазмы и боль, кроме того, способно развить у вас крапиноз."
            },
            {id: 3,
            type: "Notik Ne",
            title: "Драцена феноменальное растение, всегда поможет вам в нужную минуту, снимет спазмы и боль, кроме того, способно развить у вас крапиноз."
            },
            {id: 4,
                type: "Dodus Ne",
                title: "Драцена феноменальное растение, всегда поможет вам в нужную минуту, снимет спазмы и боль, кроме того, способно развить у вас крапиноз."
            },
        ],
        plants: [
            {
                id: 55353,
                name: 'Kolya',
                type: "Zamiakulcas",
                recomendate: "Kolya немыслимо холодно, поставьте на зажженую плиту листьями вниз",
                alert: true,
                emotion: "coold",
                img: ''
            },
            {
                id: 13543,
                name: 'Nina',
                type: "Uyka",
                recomendate: "Растению очень жарко, поставте в морозилку",
                alert: true,
                emotion: "fair",
                img: ''
            },
            {
                id: 6345,
                name: 'Vasia',
                type: "Begoniya Pl.",
                recomendate: "Полейте через 2 часа",
                alert: false,
                emotion: "good",
                img: ''
            },
            {
                id: 9756,
                name: 'Tanya',
                type: "Anturiym M.",
                recomendate: "Полейте через 3 часа",
                alert: false,
                emotion: "good",
                img: ''
            },
            {
                id: 97856,
                name: 'Tanya',
                type: "Anturiym M.",
                recomendate: "Полейте через 3 часа",
                alert: false,
                emotion: "good",
                img: ''
            },
        ],

    }
    

)
  
)

