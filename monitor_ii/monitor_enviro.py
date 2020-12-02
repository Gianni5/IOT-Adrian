from datetime import datetime
from time import sleep

# import the ORM items
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


# import the methods that will be used from the mypi file
from mypi import \
    get_serial, get_mac, get_host_name

from db import EnvironmentTPH, Base

from sense_hat import SenseHat

db_filename = './data/monitor_data.db'


def headings():
    print()
    print(f'{"Name":<10}|{"Serial #":<18}|'
          f'{"MAC":<20}|{"Temperature":<28}|'
          f'{"Humidity":>8}|{"Pressure":>8}|'
          f'{"CPU Load":>8}'
          f'')


def main(_delay):
    engine = create_engine(f'sqlite:///{db_filename}')
    session = sessionmaker(bind=engine)()
    Base.metadata.create_all(engine)
    counter = 0

    sense = SenseHat()

    while True:
        # Create a enviro object and set the properties
        enviro = EnvironmentTPH()
        enviro.device_name = get_host_name()
        enviro.device_serial = get_serial()
        enviro.device_mac = get_mac()
        enviro.temperature = sense.get_temperature()
        enviro.pressure = sense.get_pressure()
        enviro.humidity = sense.get_humidity()
        enviro.created_at = datetime.now()
        # save the object to the database using SQLAlchemy ORM and
        # commit the action
        session.add(enviro)
        session.commit()

        last_readings = session.query(EnvironmentTPH).order_by(EnvironmentTPH.id.desc()).first()

        if counter % 10 == 0:
            headings()
        counter += 1

        print(f'{last_readings.device_name:^10}|{last_readings.device_serial:^18}|'
              f'{last_readings.device_mac:^20}|{last_readings.temperature}  |'
              f'{last_readings.pressure :>8.1f}|{last_readings.humidity:>8.1f}|'
              f'{last_readings.created_at:>8.1f}'
              f'')

        sleep(_delay)


if __name__ == '__main__':
    delay = 5.0
    main(delay)
