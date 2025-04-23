public class Triangulo {
    private double a, b, c;

    public Triangulo(double a, double b, double c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public boolean ehTriangulo() {
        return (Math.abs(b - c) < a && a < (b + c)) &&
               (Math.abs(a - c) < b && b < (a + c)) &&
               (Math.abs(a - b) < c && c < (a + b));
    }

    public String tipoTriangulo() {
        if (a == b && b == c) {
            return "Equilátero";
        } else if (a == b || b == c || a == c) {
            return "Isósceles";
        } else {
            return "Escaleno";
        }
    }
}
