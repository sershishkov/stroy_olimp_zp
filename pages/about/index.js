import React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Typography variant='h3' align='center' className={classes.header}>
          Компания Олимп-ДС
        </Typography>
        <Typography
          variant='h5'
          align='center'
          className={classes.description_main}
        >
          Наша компания осуществляет услуги по ремонтам для ОСББ, так же мы
          работаем с физическими лицами
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant='h5'
          align='center'
          className={classes.description_main}
        >
          Основные наши направления:
        </Typography>
        <List>
          <ListItem>
            <Typography variant='h6' className={classes.groupOfWork}>
              Асфальтные работы
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant='h6' className={classes.groupOfWork}>
              Аварийные работы
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant='h6' className={classes.groupOfWork}>
              Ремонт подъездов
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant='h6' className={classes.groupOfWork}>
              Кровельные работы
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant='h6' className={classes.groupOfWork}>
              Крыльцо и козырьки подъездов
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant='h6' className={classes.groupOfWork}>
              Высотные работы
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant='h6' className={classes.groupOfWork}>
              Электромонтажные работы
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant='h6' className={classes.groupOfWork}>
              Изготовление и установка металлоконструкций
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant='h6' className={classes.groupOfWork}>
              Сантехнические работы
            </Typography>
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12}>
        <Typography variant='h6' className={classes.groupOfWork}>
          Асфальтные работы
        </Typography>
        <List>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              Укладка асфальта
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              Установка бордюров и поребриков
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              Укладка тротуарной плитки
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              Укладка асфальтной крошки
            </Typography>
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12}>
        <Typography variant='h6' className={classes.groupOfWork}>
          Аварийные работы
        </Typography>
        <List>
          <ListItem>
            <Typography variant='body2' align='center'>
              устранение протекания в трубопроводах ХВП ГВП отопления
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              устранение засоров внутридомовых водопроводных сетей и
              канализационных выпусков
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              ремонт системы горячего водоснабжения (ГВП)
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              ремонт системы холодного водоснабжения (ХВП)
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              ремонт системы канализации
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              ремонт системы отопления
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              ремонт сетей электроснабжения дома
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              сварочные работы по ремонту железных труб разного диаметра
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              запуск и консервация системы центрального отопления
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              ремонт контактных соединений и проводов в соединительных коробках
              и щитах
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              замена задвижек разного диаметра
            </Typography>
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12}>
        <Typography variant='h6' className={classes.groupOfWork}>
          Ремонт подъездов
        </Typography>
        <List>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              Ремонт стен
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              Ремонт потолков
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              Покраска стен и потолков
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              Покраска перил
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              Замена окон на металлопластиковые
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              Замена дверей на металлопластиковые
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              Устройство откосов
            </Typography>
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12}>
        <Typography variant='h6' className={classes.groupOfWork}>
          Кровельные работы
        </Typography>
        <List>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              ремонт мягкой кровли
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              демонтаж и монтаж покрытия мягкой кровли
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              ремонт шиферных крыш
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              ремонт смотровых окон шиферных крыш
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              ремонт коньков шиферных крыш
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              ремонт и замена водосточной системы
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              демонтаж и монтаж кровель на основе металлоцерепицы
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              демонтаж и монтаж кровель на основе профнастила
            </Typography>
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12}>
        <Typography variant='h6' className={classes.groupOfWork}>
          Высотные работы
        </Typography>
        <List>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              Ремонт межпанельных швов
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              ремонт температурных швов
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              ремонт панелей дома
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              утепление домов пенопластом
            </Typography>
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12}>
        <Typography variant='h6' className={classes.groupOfWork}>
          Электромонтажные работы
        </Typography>
        <List>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              ремонт и поиск неисправности в электропроводке
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              установка и замена щитового оборудования и его компонентов
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              монтаж и замена вводно-распределительного устройства
              электропроводки осветительной арматуры электрощитовой
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              проверка и ревизия контактных соединений и состояния проводов в
              соединительных и видгалужуных коробках и щитах
            </Typography>
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12}>
        <Typography variant='h6' className={classes.groupOfWork}>
          Сантехнические работы
        </Typography>
        <List>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              монтаж и замена трубопроводов и стояков горячего и голодного
              водоснабжения
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              монтаж и замена системы канализации
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              монтаж и замена системы отопления
            </Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant='body2'
              align='center'
              className={classes.descriptionOfWork}
            >
              монтаж и замена задвижек
            </Typography>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default About;
