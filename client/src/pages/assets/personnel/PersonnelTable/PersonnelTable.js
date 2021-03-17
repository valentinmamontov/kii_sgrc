import { useSelector } from 'react-redux'
import './PersonnelTable.styles.scss'
import { useDispatch } from 'react-redux'
import { personnelTableDelete } from '../../../../redux/personnel/personnel.action'




export const PersonnelTable = ({ setCurrentId }) => {
    const fethedPersonnel = useSelector(state => state.personnelList)
    const { loading, error, personnel, companies } = fethedPersonnel
    const dispatch = useDispatch()
   
    // console.log('personnel.persons',personnel.persons)

    // if (personnel.persons) {
    //     console.log('IF personnel.persons', personnel.persons)
    // } else {
    //     console.log('ELSE personnel.persons', personnel.persons)
    // }

    return (
        loading ? <h1>Загрузка...</h1> : error ? (
            <h2>{error}</h2>
        ) : !personnel.length > 0 ? (
            <h1>Информации о пользователях нет.</h1>
        ) : (

            <table className="table">
                <thead>
                    <tr>
                        <th>Организация</th>
                        <th>ID</th>
                        <th>ФИО</th>
                        <th>Username</th>
                        <th>Должность</th>
                        <th>E-mail</th>
                        <th>Домен</th>
                        <th>Связанное оборудование</th>
                        <th>Уровень привилегии</th>
                        <th>Администратор безопасности</th>
                        <th>Количество инцидентов</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {personnel.map((person) => {
                        return (
                            <tr key={person._id}>
                                <td>{person.companie.map(company => {
                                    return <p key={company._id}>{company.title}</p>
                                })}</td>
                                <td>{person.id}</td>
                                <td>{person.realname}</td>
                                <td>{person.personname}</td>
                                <td>{person.position}</td>
                                <td>{person.email}</td>
                                <td>{person.domain}</td>
                                <td>{person.related_hardware}</td>
                                <td>{person.privilege_level}</td>
                                <td>{person.is_security_administrator}</td>
                                <td>{person.number_of_incidents}</td>
                                <td><button type="button" onClick={() => setCurrentId(person._id)}>Edit</button></td>
                                <td><button type="button" onClick={() => dispatch(personnelTableDelete(person._id))}>
                                    DELETE
                        </button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    )
}