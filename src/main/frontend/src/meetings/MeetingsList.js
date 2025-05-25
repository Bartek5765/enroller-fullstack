export default function MeetingsList({meetings, onDelete}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
                <th>Uczestnicy</th>
                <th>Akcje</th>
            </tr>
            </thead>
            <tbody>
            {
                meetings.map((meeting, index) => <tr key={index}>
                    <td>{meeting.title}</td>
                    <td>{meeting.description}</td>
                    <td>{meeting.participants.map((participant, index) =>
                    <span key={{index}>{participant.login}<span>{(index === meeting.participants.length - 1) ? "" : ", "}</span></span>)}
                    </td>
                        <button type="button"
                                className="button-out-line delete-button"
                                onClick={() => onDelete(meeting)}>Usuń</button>
                    <button type="button"
                            className="button-out-line delete-button"
                            onClick={() => onDelete(meeting)}>Usuń</button>
                    </td>
                    <td>{meeting.id}</td>
                    <td>
                        <button type="button"
                                className="button-out-line"
                                onClick={() => onDelete(meeting)}>Zapisz się</button>
                    </td>
                </tr>)
            }
            </tbody>
        </table>
    );
}
