#!node

const fs = require('fs');
(() => {
  const args = process.argv
  let option = null;
  let help;
  let action;
  let type;
  let path;
  let data;
  let to;
  let encoding = 'utf-8';

  while (option = args.shift())
    if (option === __filename)
      break

  if (args.length === 0)
    help = true

  while (option = args.shift()) {
    switch (option) {
      case "--help":
      case "-h":
        help = true
        break
      case "--action":
      case "-a":
        action = args.shift()
        break
      case "--data":
      case "-d":
        data = args.shift()
        break
      case "--type":
      case "-t":
        type = args.shift()
        break
      case "--path":
      case "-p":
        path = args.shift()
        break
      case "--to":
      case "-o":
        to = args.shift()
        break
      default:
        console.log("Unknown Argument:", option)
    }
  }

  if (help)
    console.log(`   HELP:
    --action   -a [ create / rename / delete (remove) / append / rewrite (update) / read (show) ]
    --type     -t [ file / folder ]
    --path     -p [ name of file or folder ]
    --to       -o [ new name of file or folder ]
    --data     -d [ data to append or write ]
    --encoding -e [ encoding of file to read or write (default utf-8) ]`)
  else if (path === 'index.js' || path === '.gitignore')
    console.log("Cannot do anything with index.js")
  else
    switch (action) {
      case "create":
        switch (type) {
          case "file":
            fs.writeFile(path, data, err => {
              if (err)
                console.log(`cannot write ${path}`)
              else
                console.log(`${path} written`)
            })
            break
          case "folder":
            fs.mkdir(path, err => {
              if (err)
                console.log(`cannot create ${path}`)
              else
                console.log(`${path} created`)
            })
            break
          default:
            console.log("Unknown type:", type)
        }
        break
      case "delete":
      case "remove":
        switch (type) {
          case "file":
            fs.unlink(path, err => {
              if (err)
                console.log(`cannot delete ${path}`)
              else
                console.log(`${path} deleted`)
            })
            break
          case "folder":
            fs.rmdir(path, err => {
              if (err)
                console.log(`cannot delete ${path}`)
              else
                console.log(`${path} deleted`)
            })
            break
          default:
            console.log("Unknown type:", type)
        }
        break
      case "rename":
        fs.rename(path, to, err => {
          if (err)
            console.log(`cannot rename ${path}`)
          else
            console.log(`${path} renamed`)
        })
        break
      case "read":
      case "view":
        fs.readFile(path, (err, data) => {
          if (err)
            console.log(`cannot red ${path}`)
          else
            console.log(`reading ${path}:\n ${data}`)
        })
        break
      case "append":
        fs.appendFile(path, data, err => {
          if (err)
            console.log(`cannot append ${path}`)
          else
            console.log(`${path} appended`)
        })
        break
      case "rewrite":
      case "update":
        fs.writeFile(path, data, err => {
          if (err)
            console.log(`cannot rewrite ${path}`)
          else
            console.log(`${path} rewritten`)
        })
        break
      default:
        console.log("Unknown Action:", action)
    }
})()