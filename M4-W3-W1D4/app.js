document.addEventListener('DOMContentLoaded', () => {
    const filterTypeSelect = document.getElementById('filterType');
    const filterInput = document.getElementById('filterInput');
    const userTableBody = document.getElementById('userTable');

    async function fetchUsers() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return response.json();
    }

    function displayUsers(users) {
        userTableBody.innerHTML = '';
        users.forEach(user => {
            const row = `<tr>
                            <td>${user.name}</td>
                            <td>${user.username}</td>
                            <td>${user.email}</td>
                        </tr>`;
            userTableBody.innerHTML += row;
        });
    }

    async function filterUsers() {
        const users = await fetchUsers();
        const filterType = filterTypeSelect.value;
        const filterValue = filterInput.value.toLowerCase();

        const filteredUsers = users.filter(user => user[filterType].toLowerCase().includes(filterValue));
        displayUsers(filteredUsers);
    }

    filterUsers();

    filterTypeSelect.addEventListener('change', filterUsers);
    filterInput.addEventListener('input', filterUsers);
});
