import java.util.Scanner;

public class TrianguloApp {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o lado a: ");
        String inputA = scanner.nextLine();

        System.out.print("Digite o lado b: ");
        String inputB = scanner.nextLine();

        System.out.print("Digite o lado c: ");
        String inputC = scanner.nextLine();

        // Valida se são números
        if (isNaN(inputA) || isNaN(inputB) || isNaN(inputC)) {
            System.out.println("Os valores precisam ser números!");
        } else {
            double a = Double.parseDouble(inputA);
            double b = Double.parseDouble(inputB);
            double c = Double.parseDouble(inputC);

            Triangulo triangulo = new Triangulo(a, b, c);
            if (triangulo.ehTriangulo()) {
                System.out.println("Forma um triângulo do tipo: " + triangulo.tipoTriangulo());
            } else {
                System.out.println("Os valores não formam um triângulo.");
            }
        }
        scanner.close();
    }

    private static boolean isNaN(String str) {
        try {
            Double.parseDouble(str);
            return false;
        } catch (NumberFormatException e) {
            return true;
        }
    }
}
