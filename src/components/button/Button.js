
export default function Button(props){
    const { url, title } = props

    const style = {
        backgroundColor: 'var(--ifm-color-primary)',
        padding:'5px 8px',
        color:"#fff",
        marginBottom: "7px"
    }

    return <a style={style} href={url} className="button">{ title }</a>
}