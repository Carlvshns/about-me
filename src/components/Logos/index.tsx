import * as C from './styled';
import javalogo from '../../assets/java-logo.png';
import springlogo from '../../assets/spring-logo.png';
import reactlogo from '../../assets/react-logo.png';
import sqllogo from '../../assets/sql-logo.png';

export const Logos = () => {
    return(
        <C.Container>
            <img src={javalogo} width="150" height="126"></img>
            <img src={springlogo} width="150" height="126"></img>
            <img src={reactlogo} width="150" height="126"></img>
            <img src={sqllogo} width="150" height="128"></img>
        </C.Container>
    )
}