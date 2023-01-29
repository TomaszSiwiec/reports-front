import {Button, Container, Pagination, Table} from "react-bootstrap";
import {faPlus} from '@fortawesome/fontawesome-free-solid'
import styles from "./ReportsTable.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperclip} from '@fortawesome/fontawesome-free-solid'

const ReportsTable = () => {
    // https://codepen.io/cornflourblue/pen/oZZzLr
    // pagination
    const elements = () => [
        {
            date: '2022-12-28',
            time: '13:32',
            comments: 'Using a font that is easy to read is important. The font adds value to your text. It is also important to choose the correct color and text size for the font. Using a font that is easy to read is important. The font adds value to your text. It is also important to choose the correct color and text size for the font. Using a font that is easy to read is important. The font adds value to your text. It is also important to choose the correct color and text size for the font.',
            attachments: []
        },
        {
            date: '2022-11-28',
            time: '13:32',
            comments: 'Brak',
            attachments: ['...', '...', '...', '...', '...', '...', '...', '...', '...']
        },
        {
            date: '2022-10-28',
            time: '13:32',
            comments: 'Brak',
            attachments: ['...', '...', '...', '...', '...', '...']
        },
        {
            date: '2022-09-28',
            time: '13:32',
            comments: 'Brak',
            attachments: ['...']
        },
        {
            date: '2022-08-28',
            time: '13:32',
            comments: 'Brak',
            attachments: ['...', '...', '...', '...']
        },
        {
            date: '2022-07-28',
            time: '13:32',
            comments: 'Brak',
            attachments: ['...', '...', '...']
        },
        {
            date: '2022-06-28',
            time: '13:32',
            comments: 'Brak',
            attachments: []
        }
        // ,
        // {
        //     date: '2022-05-28',
        //     time: '13:32',
        //     comments: 'Brak',
        // },
        // {
        //     date: '2022-04-28',
        //     time: '13:32',
        //     comments: 'Brak',
        // },
        // {
        //     date: '2022-03-28',
        //     time: '13:32',
        //     comments: 'Brak',
        // },
        // {
        //     date: '2022-02-28',
        //     time: '13:32',
        //     comments: 'Brak',
        // },
        // {
        //     date: '2022-01-28',
        //     time: '13:32',
        //     comments: 'Brak',
        // },
        // {
        //     date: '2021-12-28',
        //     time: '13:32',
        //     comments: 'Brak',
        // },
        // {
        //     date: '2021-11-28',
        //     time: '13:32',
        //     comments: 'Brak',
        // },
        // {
        //     date: '2021-10-28',
        //     time: '13:32',
        //     comments: 'Brak',
        // }
    ];

    const paginators = () => {
        let result = [];
        for (let i = 0; i < 10; i = i + 1) {
            result.push(<Pagination.Item>{i}</Pagination.Item>);
        }
        return result;
    };

    return (
        <Container className="align-content-center table-responsive">
            <Table striped bordered hover className="w-100">
                <thead>
                <td colSpan={5} className={styles.tableHeader}>
                    Reports
                </td>
                <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Comments</th>
                    <th>Attachments</th>
                    <th>
                        <Button className="btn-secondary w-50"><FontAwesomeIcon icon={faPlus}/> Add new</Button>
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    elements().map(el => {
                        return (
                            <tr>
                                <td className={styles.dateCell}>{el.date}</td>
                                <td className={styles.timeCell}>{el.time}</td>
                                <td className={styles.commentsCell}>{el.comments}</td>
                                <td className={styles.attachmentsCell}><FontAwesomeIcon
                                    icon={faPaperclip}/> {el.attachments.length}</td>
                                <td className={styles.buttonsCell}>
                                    <Button variant={"warning"}>Edit</Button>{" "}
                                    <Button variant={"danger"}>Delete</Button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </Table>
            <Pagination className="m-5">
                {paginators()}
            </Pagination>
        </Container>
    );
};

export default ReportsTable;