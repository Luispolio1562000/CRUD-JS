import { RenderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";





/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async( element ) => {

    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();
    element.innerHTML = '';

    RenderTable( element );
    /* renderButtons( element );
    renderAddButton( element );
    renderModal( element, async( userLike ) => {
        const user = await saveUser( userLike );
        usersStore.onUserChanged( user );
        renderTable();
    }); */

}

