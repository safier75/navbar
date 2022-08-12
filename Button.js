import './Button.css'
const STYLES=['btn--primary','btn--outline']
const SIZES =['btn--medium','btn--large']
export const Button=({children,type,onclick,buttonstyle,buttonsize})=>{
    const checkButtonStyle=STYLES.includes(buttonstyle)?buttonstyle:STYLES[0]
    const checkButtonSize=SIZES.includes(buttonsize)?buttonsize:SIZES[0]
    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}onclick={onclick}type={type}>{children}</button>
    )
}
<ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>bu</ul>