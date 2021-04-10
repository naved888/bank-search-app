import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Card, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu, Dropdown, Input, Button } from "antd";
import 'antd/dist/antd.css';
import './Home.css'
import axios from 'axios'


function Home() {
    let history = useHistory();
    const [rowData, setRowData] = useState([]);
    const [showData, setshowData] = useState([])
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(5);
    const [loading, setLoading] = useState(false)
    const [val, setval] = useState("");
    const [pageNumberLimit,] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
    };

    const pages = [];
    for (let i = 1; i <= Math.ceil(showData.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    let currentItems = showData.slice(indexOfFirstItem, indexOfLastItem);
    console.log(typeof(currentItems))
    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage === number ? "active" : null}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });

    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
    }
    const [cityRowData, setcityRowData] = useState("MUMBAIROWDATA")
    const [cityData, setcityData] = useState("MUMBAI")
    const [cityShowData, setcityShowData] = useState("MUMBAISHOWDATA")


    //fetch
    useEffect(() => {
        fetchCity(cityData, cityRowData, cityShowData);
    }, []);

    const fetchCity = async (cityName, cityRow, cityShow) => {
        if (localStorage.getItem(cityRow) === null) {
            setLoading(true);
            const res = await axios.get('https://vast-shore-74260.herokuapp.com/banks?city=' + cityName)
            console.log(typeof(res))
            setRowData(res.data)
            setshowData(res.data)
            setLoading(false);
            console.log("fetch end")
        } else {
            setshowData(JSON.parse(localStorage.getItem(cityRow)))
            setRowData(JSON.parse(localStorage.getItem(cityRow)))
            console.log('localstorage fetched')
        }
    }

    // fetching delhi data
    const fetchDelhi = () => {
        setcityData("DELHI")
        setcityRowData("DELHIROWDATA")
        setcityShowData("DELHISHOWDATA")
        setval("")
        fetchCity("DELHI", "DELHIROWDATA", "DELHISHOWDATA");
    }

    //fetching nashik data
    const fetchNashik = () => {
        setcityData("NASHIK")
        setcityRowData("NASHIKROWDATA")
        setcityShowData("NASHIKSHOWDATA")
        setval("")
        fetchCity("NASHIK", "NASHIKROWDATA", "NASHIKSHOWDATA");
    }

    //fetching pune data
    const fetchPune = () => {
        setcityData("PUNE")
        setcityRowData("PUNEROWDATA")
        setcityShowData("PUNESHOWDATA")
        setval("")
        fetchCity("PUNE", "PUNEROWDATA", "PUNESHOWDATA");
    }

    //fetching mumbai data
    const fetchingMumbai = () => {
        setcityData("MUMBAI")
        setcityRowData("MUMBAIROWDATA")
        setcityShowData("MUMBAISHOWDATA")
        setval("")
        fetchCity("MUMBAI", "MUMBAIROWDATA", "MUMBAISHOWDATA");
    }

    function setItemPerPage5() {
        setitemsPerPage(5);
        console.log(itemsPerPage)
    }
    function setItemPerPage10() {
        setitemsPerPage(10);
        console.log(itemsPerPage)
    }
    function setItemPerPage15() {
        setitemsPerPage(15);
        console.log(itemsPerPage)
    }
    function setItemPerPage20() {
        setitemsPerPage(20);
        console.log(itemsPerPage)
    }

    //dropdown menu
    const menu = (
        <Menu>
            <Menu.Item>
                <Button className="btn-city" onClick={fetchingMumbai} danger>Mumbai</Button>
            </Menu.Item>
            <Menu.Item>
                <Button className="btn-city" onClick={fetchPune} danger>PUNE</Button>
            </Menu.Item>
            <Menu.Item>
                <Button className="btn-city" onClick={fetchNashik} danger>NASHIK</Button>
            </Menu.Item>
            <Menu.Item>
                <Button className="btn-city" onClick={fetchDelhi} danger>DELHI</Button>
            </Menu.Item>
        </Menu>
    );

    const menuItem = (
        <Menu>
            <Menu.Item>
                <Button className="btn-city" onClick={setItemPerPage5} danger>5 / page</Button>
            </Menu.Item>
            <Menu.Item>
                <Button className="btn-city" onClick={setItemPerPage10} danger>10 / page</Button>
            </Menu.Item>
            <Menu.Item>
                <Button className="btn-city" onClick={setItemPerPage15} danger>15 / page</Button>
            </Menu.Item>
            <Menu.Item>
                <Button className="btn-city" onClick={setItemPerPage20} danger>20 / page</Button>
            </Menu.Item>
        </Menu>
    );

    const [toggle, settoggle] = useState(true)
    //like button is clicked
    function checked(ifsc) {
        rowData.map(data => {
            if (data.ifsc === ifsc) {
                if (data.favorite === true) {
                    data.favorite = false
                    settoggle(!toggle)
                } else if (data.favorite === false) {
                    data.favorite = true
                    settoggle(!toggle)
                }
            }
            return toggle;
        })
        localStorage.setItem(cityRowData, JSON.stringify(rowData))
        setRowData(rowData)
        const show = search(val)
        localStorage.setItem(cityShowData, JSON.stringify(show))
        console.log("showData :", showData)
    }

    let debounceTimeout = 0;

    const debounceSearch = (event) => {
        setval(event.target.value)
        let value = event.target.value;
        const later = () => {
            clearTimeout(debounceTimeout);
            search(value);
        };
        if (value === "") {
            setshowData(rowData)
        } else {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(later, 300);
        }

    };
    //route
    function redirectToDetails(data) {
        history.push({
            "pathname": `/${data.ifsc}`,
            data: data
        })
    }

    function search(text) {
        const items = rowData.filter((item) => {
            if (item.bank_name.toLowerCase().includes(text.toLowerCase()) || item.ifsc.toLowerCase().includes(text.toLowerCase())) {
                return item;
            }
            return null;
        })
        setshowData(items)
        return showData
    };

    return (
        <div className="container">
            <section className="filters">
                <Dropdown overlay={menu} placement="bottomCenter" arrow>
                    <Button>Search By City</Button>
                </Dropdown>
                <div className="search-input">
                    <Input.Search className={'ant-input-search'} id="search-bar" value={val} placeholder="Search" onChange={(e) => debounceSearch(e)} onSearch={search} enterButton />
                </div>
            </section>
            {
                (!loading) ? <section>
                    {

                        currentItems.map((data, index) => {
                            return (
                                <div className="card-container" key={index}>

                                    <Card>
                                        {(data.favorite === undefined) ? Object.assign(data, { favorite: false }) : console.log(data.favorite)}
                                        <Card.Header>
                                            <div className="d-flex justify-content-between">
                                                {data.bank_name}

                                                {
                                                    (data.favorite) ? <button onClick={() => checked(data.ifsc)} className="btn btn-danger">Unlike</button>
                                                        : <button onClick={() => checked(data.ifsc)} className="btn btn-success">Like</button>
                                                }

                                            </div>


                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Title>{data.ifsc}</Card.Title>
                                            <Card.Text>
                                                {data.address}
                                            </Card.Text>
                                            <Button variant="primary" onClick={() => redirectToDetails(data)}>View</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }
                        )
                    }
                </section> : <div className="spin-container"><div className="loading"></div></div>
            }

            {
                (!loading) ? <section className="d-flex justify-content-center flex-wrap align-items-baseline">
                    <ul className="pageNumbers">
                        <li>
                            <button
                                onClick={handlePrevbtn}
                                disabled={currentPage === pages[0] ? true : false}
                            >
                                Prev
                            </button>
                        </li>
                        {pageDecrementBtn}
                        {renderPageNumbers}
                        {pageIncrementBtn}
                        <li>
                            <button
                                onClick={handleNextbtn}
                                disabled={currentPage === pages[pages.length - 1] ? true : false}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                    <Dropdown overlay={menuItem} placement="bottomCenter" arrow>
                        <Button >Items Per Page</Button>
                    </Dropdown>
                </section> : null
            }

        </div>
    );
}
export default Home;