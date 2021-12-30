function App() {
    const newYear = new Date('December 31, 2021 23:59:59');
    return (
        <div className="app">
            Year is {newYear.getFullYear()}, still working on the project
        </div>
    );
}

export default App;
