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
        },
        {
          label: `Transferts`,
          key: '4',
          children: "Transferts",
        },
      ]
    
      const [stats, setStats] = useState(true)
      const [inputStats, setInputStats] = useState(false)
      const [outputStats, setOutStats] = useState(false)
      const [transfertStats, setTransfertStats] = useState(false)

      const changTabStat = (key) => {
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
      }
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
                      onTabClick={(key) => {
                        changTabStat(key)
                      }}
                      items={tabsItems}
                    />
                  </Col>
                </Row>
        </div>
  )
}

export default Variations