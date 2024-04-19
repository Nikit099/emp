import './page.css';

export default function Problems () {
    return (
        <>
            <aside class="side_panel">
                <div class="side_panel__container">
                    <div class="side_panel__header">
                        <span class="side_panel__title">
                            Возникшие проблемы
                        </span>
                    </div>
                    <div class="messagebox">
                        <div class="messagebox__graph_block">
                            <div class="messagebox__graph_title">
                                Освещение 29.03.2024 - 30.03.2024
                            </div>
                            <div class="messagebox__graph"></div>
                        </div>
                        <div class="messagebox__message_block">
                            <div class="messagebox__message">
                                <div class="messagebox__message_title">
                                    С 14ч 56мин До 18ч 56мин
                                </div>
                                <div class="messagebox__message_description">
                                    Вам необходимо увеличить дозировку света вашему растению
                                </div>
                            </div>
                        </div>
                        <div class="messagebox__hr"></div>
                    </div>
                </div>
            </aside>
        </>
    )
}