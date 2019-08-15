import logging
from argparse import ArgumentParser, FileType 
import json

logger = logging.getLogger('sorter')
logging.basicConfig(level='INFO')

parser = ArgumentParser(
    description='This is a sorter script for mulheres.json file',
)

parser.add_argument('-i', metavar='in-file',
                    type=FileType('rt', encoding='utf8'))

parser.add_argument('-o', metavar='out-file',
                    type=FileType('w+b'))

try:
    results = parser.parse_args()
    mulheres = json.loads(results.i.read())
    mulheres["mulheres"].sort(key=lambda item: item["name"])
    results.o.write(json.dumps(mulheres, indent=4, ensure_ascii=False).encode('utf8'))
    logger.info("File generated successfully")
except Exception as e:
    logger.exception(e)