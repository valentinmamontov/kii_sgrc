import './Home.styles.scss'


export const Home = () => {
    return (
        <>
            <div className="content">
                <h1>Что такое Security GRC (SGRC)?</h1>
                <p>
                    Security Governance, Risk, Compliance (SGRC) – это концепция управления информационной безопасностью (ИБ) с точки зрения трех понятий: вопросы информационной безопасности рассматриваются на высшем уровне руководства компании (Governance), на основе управления рисками (Risk), а также в соответствии с требованиями различных стандартов (Compliance). Понятия Governance, Risk и Compliance были объединены в одну концепцию после принятия в 2002 году в США Закона Сарбейнза-Оксли. Он предполагает новый режим регулирования и контроля финансовой деятельности, а также повлек за собой изменения в процессе управления информационными активами и в требованиях к раскрытию информации. Слово Security проектирует данную концепцию на управление информационной безопасностью.
                </p>

                <h2>Governance</h2>

                <p>Governance — процесс управления ИБ на основе подхода «сверху-вниз», когда поддержка, инициатива и определение направлений деятельности исходит от высшего руководства и спускается через руководителей среднего звена к сотрудникам.</p>


                <h2>Risk</h2>

                <p>
                    Risk — процесс управления ИБ с точки зрения управления рисками. Исследование рисков необходимо для выявления информационных активов, определения угроз, вызывающих риски для них, оценить возможные потери и потенциальные убытки компании в случае возникновения угроз. В результате руководство способно адекватно оценивать бюджет, учитывающий все требующиеся расходы для защиты информационных активов от обнаруженных угроз. </p>

                <h2>Compliance</h2>

                <p> Compliance— процесс управления ИБ в соответствии с требованиями стандартов: процедур, базисов, политик, международных и государственных стандартов, а также руководящих и нормативных документов. Данный подход относится к административным мерам управления и направлен на снижение риска невыполнения компанией каких-либо внешних требований. Таким образом, вышеуказанные направления деятельности тесно связаны между собой, воздействуют друг на друга и позволяют руководству принимать целостные управленческие решения в области ИБ во взаимосвязи с другими корпоративными системами управления.</p>
            </div>
        </>
    )
}