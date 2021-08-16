import React from 'react'
import { stats, group, fieldLabel } from './PostStats.module.css'

const PostStats = ({ children }) => {
    return (
        <ul className={stats}>
            {children}
        </ul>
    )
}

interface GroupProps {
    field: string
    value: string
}
const Group = ({ field, value }: GroupProps) => (
    <li className={group}>
        <span className={fieldLabel}>{field}</span>
        <span>{value}</span>
    </li>
)
PostStats.Group = Group

export default PostStats
