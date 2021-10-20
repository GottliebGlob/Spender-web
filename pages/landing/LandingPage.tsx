import React from 'react';
import styles from "./LandingPage.module.scss";
import HeaderLayout from "../../components/HeaderLayout";
import {Typography, Container, Grid, Card} from "@mui/material";

import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CategoryIcon from '@mui/icons-material/Category';
import SyncIcon from '@mui/icons-material/Sync';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import TimelineIcon from '@mui/icons-material/Timeline';

export const LandingPage = () => {
    return (
        <div className={styles.container}>
            <HeaderLayout/>
            <div className={styles.topContainer}>
                <div className={styles.titleContainer}>
                    <Typography variant="h4" className={styles.mainTitle}>Spender </Typography>
                    <Typography variant="h4" className={styles.mainTitleText}> - возьмите наконец финасы под контроль!</Typography>
                </div>


                <div className={styles.firstBlock}>
                    <div className={styles.downloadButtonBlock}>
                        <div>
                            <Typography variant="h4">Понятное и простое решение </Typography>
                            <Typography variant="h4">для учета расходов</Typography>
                            <div className={styles.middleText}>
                                <Typography variant="h5">
                                    Возьмите под контроль Ваши расходы,
                                </Typography>
                                <Typography variant="h5">
                                    при этом не теряя много времени.
                                </Typography>
                                <Typography variant="h5" className={styles.bold}>
                                    Недоумеваете, куда утекли Ваши деньги?
                                </Typography>
                            </div>
                        </div>


                        <div className={styles.badgeButton}>
                            <a href='https://play.google.com/store/apps/details?id=com.bananacoder.spender_money_tracker&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                                <img alt='Доступно в Google Play' className={styles.badge}
                                     src='https://play.google.com/intl/en_us/badges/static/images/badges/ru_badge_web_generic.png'/>
                            </a>
                            <Typography variant="h5" className={styles.bold}>
                                Попробуйте, это бесплатно!
                            </Typography>
                        </div>

                    </div>

                    <div className={styles.logoWrapper}>
                        <img src="/right.png" className={styles.rightLogo}/>
                        <img src="/left.png" className={styles.leftLogo}/>
                    </div>

                </div>
            </div>
            <Container maxWidth='xl' >
                <div className={styles.secContainer}>
                <div className={styles.secTitleContainer}>
                    <Typography variant="h4" className={styles.secTitleText}>Почему</Typography>
                    <Typography variant="h4" className={styles.secTitle}>Spender</Typography>
                    <Typography variant="h4" className={styles.secTitleText}>?</Typography>
                </div>
                </div>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={6} md={4}>
                <Card className={styles.card}>
                    <div className={styles.cardHead}>
                        <LightbulbIcon color="primary"/>
                        <Typography variant="h6">
                            Интуитивность
                        </Typography>
                    </div>
                    <Typography variant="subtitle1">
                        В приложении нет ничего лишнего- не нужно разбираться с сотней ненужных функций.
                    </Typography>
                </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={styles.card}>
                        <div className={styles.cardHead}>
                        <CalendarTodayIcon color="primary"/>
                        <Typography variant="h6">
                            Гибкая система отслеживания трат
                        </Typography>
                        </div>
                        <Typography variant="subtitle1">
                            Теперь Вы решаете, когда начнется месяц.
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={styles.card}>
                        <div className={styles.cardHead}>
                        <CategoryIcon color="primary"/>
                        <Typography variant="h6">
                            Система категорий
                        </Typography>
                        </div>
                        <Typography variant="subtitle1">
                            Разделяйте траты легко.
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={styles.card}>
                        <div className={styles.cardHead}>
                        <SyncIcon color="primary"/>
                        <Typography variant="h6">
                            Синхронизация данных
                        </Typography>
                        </div>
                        <Typography variant="subtitle1">
                            Вы можете использовать один аккаунт на нескольких устройствах.
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={styles.card}>
                        <div className={styles.cardHead}>
                        <DesignServicesIcon color="primary"/>
                        <Typography variant="h6">
                            Минималистичный дизайн
                        </Typography>
                        </div>
                        <Typography variant="subtitle1">
                            В приложении нет ничего, что бы отвлекало или раздражало.
                        </Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={styles.card}>
                        <div className={styles.cardHead}>
                        <TimelineIcon color="primary"/>
                        <Typography variant="h6">
                            Наглядная статистика
                        </Typography>
                        </div>
                        <Typography variant="subtitle1">
                            Посмотрите, куда ушли ваши деньги на графиках и диаграммах.
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
            </Container>
        </div>
    )
}


