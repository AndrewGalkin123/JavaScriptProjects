import { Table, Typography, Divider } from 'antd'
import { pokemons } from "../data"

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text) => <Typography.Text copyable>{text}</Typography.Text>
    },
    {
        title: "Number",
        dataIndex: "number",
        key: "number"
    },
    {
        title: "Class",
        dataIndex: "classification",
        key: "classification",
        filters: [
            {
                text: "Mouse Pokémon",
                value: "Mouse Pokémon"
            },
            {
                text: "Lizard Pokémon",
                value: "Lizard Pokémon"
            },
            {
                text: "Seed Pokémon",
                value: "Seed Pokémon"
            },
        ],
        onFilter: (value, item) => item.classification.includes(value)
    },
    {
        title: "Rate",
        dataIndex: "fleeRate",
        key: "fleeRate",
        sorter: (a, b) => a.fleeRate - b.fleeRate
    }
]

const dataSource = pokemons.map(item => ({ ...item, key: item.id }))

const _Table = ({ rows = 5 }) => {
    return (
        <>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={{
                    // defaultPageSize: 5,
                    // showSizeChanger: true,
                    // pageSizeOptions: [5, 10, 15, 20]
                    pageSize: rows
                }}
            />
            <Divider></Divider>
        </>
    )
}

export default _Table