from mysql.connector.connection import MySQLConnection
from mysql.connector.cursor import MySQLCursorDict
from mysql.connector.pooling import MySQLConnectionPool

import config

debug = 1

pool = MySQLConnectionPool(
    host=config.Db.host,
    user=config.Db.user,
    password=config.Db.password,
    database=config.Db.database,
    connect_timeout=10,
    autocommit=False,
    pool_size=16
)


class MySQLCursor2(MySQLCursorDict):
    def end(self, commit: bool = False):
        conn = self._connection
        if commit:
            conn.commit()
        self.close()
        conn.close()


def db() -> MySQLCursor2:
    d: MySQLConnection = pool.get_connection()
    c = MySQLCursor2(d)
    c.connection = d
    return c


def query(operation: str, params: tuple or dict = None, many: bool = False):
    c = db()
    try:
        (c.executemany if many else c.execute)(operation, params)
        r = c.fetchall()
        return r
    except Exception as err:
        raise err
    finally:
        c.end()


def update(operation: str, params: tuple or dict = None, many: bool = False, return_row_id: bool = True):
    c = db()
    try:
        (c.executemany if many else c.execute)(operation, params)
        if return_row_id:
            row_id: int = c.getlastrowid()
            return row_id
    except Exception as err:
        raise err
    finally:
        c.end(True)
