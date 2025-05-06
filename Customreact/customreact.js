function createElement(reactelement,maincontainer){
    const domelement = document.createElement(reactelement.type)
    domelement.innerHTML = reactelement.Children
    domelement.setAttribute('href',reactelement.props.href)
    domelement.setAttribute('target',reactelement.props.target)
     maincontainer.appendChild(domelement)
}

const reactelement={
    type:'a',
    props: {
        href:'https://www.google.com',
        target:'_blank',  
    },
    Children:"visit google"
}
const maincontainer = document.getElementById('#root');

