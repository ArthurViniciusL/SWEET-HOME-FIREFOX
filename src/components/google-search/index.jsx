import { PageFooter } from '../footer';
import './GoogleSearchBar.css'

export const GoogleSearchBar = () => {
    const URL = "https://www.google.com./search";
    const placeholderMsg = "Pesquise no google...";
    return (
        <div>
            <form className="box-form" action={URL} method="get">
                <input className="input-search" type="text" name="q" placeholder={placeholderMsg} />
            </form>

        </div>
    );
}