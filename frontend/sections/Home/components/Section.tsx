import classNames from "classnames"

const Section: React.FC<SectionProps> = ({ children, color }) => {
    return (<div className={classNames(['h-[500px] opacity-60', {
        ['bg-darkPurple']: color === 'light-red',
        ['bg-blue-light']: color === 'light-blue',
        ['bg-gray']: color === 'light-gray',
    }])}>
        {children}
    </div>)
}

export default Section

export type SectionProps = {
    color: 'light-blue' | 'light-gray' | 'light-red'
}