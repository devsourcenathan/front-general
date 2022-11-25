import React from 'react'
import { Typography, Row, Col, Tabs} from 'antd'
import { useState } from 'react'
import AllStat from './all/AllStats'
import InputStat from './input/InputStat'
import OutputStat from './output/OutputStat'
import TransfertStat from './transfert/TransfertStat'
import All from './all/All.tsx'
// import { useState } from 'react';
  const {Title} = Typography

function Variations() {

    const tabsItems = [
        {
          label: `Toutes`,
          key: '1',
          children: <All />,
        //   children: <Incomes />,
        },
        {
          label: `Entrees`,
          key: '2',
          children: "Entrees",
        //   children: <Expenses />,
        },
        {
          label: `Sorties`,
          key: '3',
          children: "Sorties",
        //   children: <Banks />,
        },
        {
          label: `Transferts`,
          key: '4',
          children: "Transferts",
        //   children: <Banks />,
        },
      ]
    
      const [stats, setStats] = useState(true)
      const [inputStats, setInputStats] = useState(false)
      const [outputStats, setOutStats] = useState(false)
      const [transfertStats, setTransfertStats] = useState(false)
    // const [income, setIncome] = useState(true)
    // const [expenses, setExpenses] = useState(false)
    // const [banks, setBanks] = useState(false)

  return (
        <div className="site-layout-background" style={{ padding: 5, minHeight: 360 }}>
            <Title level={5}>Variations du stock</Title>
                {stats && <AllStat />}
                {inputStats && <InputStat />}
                {outputStats && <OutputStat />}
                {transfertStats && <TransfertStat />}
                <Row>
                  <Col span="24">
                      <Tabs
                      defaultActiveKey="1"
                    //   tabBarStyle={{color: params.colors.back_second}}
                      //onChange={onChange}
                      onTabClick={(key) => {
                        if(key === "1"){
                            setStats(true)
                            setInputStats(false)
                            setOutStats(false)
                            setTransfertStats(false)
                        }

                        if(key === "2"){
                            setStats(false)
                            setInputStats(true)
                            setOutStats(false)
                            setTransfertStats(false)
                        }

                        if(key === "3"){
                            setStats(false)
                            setInputStats(false)
                            setOutStats(true)
                            setTransfertStats(false)
                        }
                        if(key === "4"){
                            setStats(false)
                            setInputStats(false)
                            setOutStats(false)
                            setTransfertStats(true)
                        }
                      }}
                      items={tabsItems}
                    />
                  </Col>
                </Row>
        </div>
  )
}

export default Variations