package main

import (
    "bytes"
    "encoding/json"
    "net/http"
    "os/exec"
)

type Request struct {
    Code string `json:"code"`
}

type Response struct {
    Output string `json:"output"`
    Error  string `json:"error"`
}

func handler(w http.ResponseWriter, r *http.Request) {
    var req Request
    json.NewDecoder(r.Body).Decode(&req)

    tmp := "temp.go"
    err := os.WriteFile(tmp, []byte(req.Code), 0644)
    if err != nil {
        json.NewEncoder(w).Encode(Response{Error: err.Error()})
        return
    }
    
    ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
    defer cancel()

    cmd := exec.CommandContext(ctx, "go", "run", tmp)
    var out bytes.Buffer
    var stderr bytes.Buffer
    cmd.Stdout = &out
    cmd.Stderr = &stderr

    err = cmd.Run()
    if err != nil {
        json.NewEncoder(w).Encode(Response{Error: stderr.String()})
        return
    }

    json.NewEncoder(w).Encode(Response{Output: out.String()})
}

func main() {
    http.HandleFunc("/run", handler)
    http.ListenAndServe(":3003", nil)
}
